/**
 * Format bytes as human-readable text.
 * 
 * @param bytes Number of bytes.
 * @param si True to use metric (SI) units, aka powers of 1000. False to use 
 *           binary (IEC), aka powers of 1024.
 * @param dp Number of decimal places to display.
 * 
 * @return Formatted string.
 */
function FileSize(bytes, si = false, dp = 1) {
    const thresh = si ? 1000 : 1024;

    if (Math.abs(bytes) < thresh) { return bytes + ' B'; }

    const units = si ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    let u = -1;
    const r = 10 ** dp;

    do {
        bytes /= thresh;
        ++u;
    } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);
    return bytes.toFixed(dp) + ' ' + units[u];
}

function MakeCrumb(name, url, active) {
    return active ? `<a href="${url}">${name}</a>/` : `${name}/`;
}

function FillBreadcrumbs() {
    const uri = window.location.pathname;
    console.log(uri)
    const dirs = uri.replace(/\/[^\/]*$/, "").split("/");
    console.log(dirs)
    let path = "", crumbs = "";
    for (let i = 0; i < dirs.length; i++) {
        path += dirs[i] + "/";
        crumbs += MakeCrumb(i == 0 ? "root" : decodeURIComponent(dirs[i]), path, i != dirs.length - 1)
    }
    $("#crumbs").append(crumbs)
}

function FillTable() {
    const list = [];
    const matches = autoindex.matchAll(/<a href="(.+)">.+<\/a>\s+([\w-]+\s[\d:]+)\s+(\d*)/gm);
    for (const match of matches) {
        list.push({
            "name": match[1],
            "mtime": match[2],
            "size": match[3]
        })
    }
    console.log(list)
    let fileCount = 0, dirCount = 0;
    const tbody = $('#table').children('tbody');
    list.forEach(e => {
        if (e.name.endsWith("/")) {
            tbody.append(`<tr><td><a class="link-icon" href="${e.name}">${e.name}</a></td><td>${e.mtime}</td><td> - </td></tr>`);
            dirCount++;
        } else {
            tbody.append(`<tr><td><a class="link-icon" href="${e.name}">${e.name}</a></td><td>${e.mtime}</td><td>${FileSize(e.size)}</td></tr>`);
            fileCount++;
        }
    });

    $("#dir-stats").text(`${dirCount} ${dirCount == 1 ? "directory" : "directories"}`);
    $("#file-stats").text(`${fileCount} ${fileCount == 1 ? "file" : "files"}`);
}
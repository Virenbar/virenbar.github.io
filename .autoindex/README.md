# NGINX autoindex

Config and theme for autoindex plugin for nginx.  
Uses styles from virenbar.ru

## Config

```conf
server {
    ...
    location / {
        root /media/storage/public;
        autoindex on;
        add_before_body "/theme/before.html";
        add_after_body "/theme/after.html";
        charset utf-8;
        try_files $uri $uri/ =404;
    }

    location /theme/ {
        root /var/www/virenbar.ru;
    }

    error_page 404 /404.html;
    location = /404.html {
        root /var/www/virenbar.ru;
        internal;
    }
    # autoindex in json (not used)
    location /json/ {
        autoindex on;   
        autoindex_format json;
        alias /media/storage/public/;
    }
    ...
}
```

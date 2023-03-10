async function resetFocus() {
  document.body.tabIndex = 0;
  document.body.focus();
  document.body.tabIndex = -1;
}

/**
 * Reset the keyboard focus to the body tag on page changes.
 */
export default function () {
  useRouter().afterEach((from, to) => {
    if (from.path !== to.path) { nextTick(resetFocus); }
  });
}

/**
 * Reset the keyboard focus to the body tag on page changes.
 */
export default function () {
  async function resetFocus() {
    //document.body.tabIndex = 0;
    document.body.focus();
    //document.body.tabIndex = -1;
  }
  watchEffect(resetFocus);
  // const router = useRouter();
  // router.afterEach((from, to) => {
  //   if (from.path !== to.path) {
  //     nextTick(() => {
  //       document.body.tabIndex = 0;
  //       document.body.focus();
  //       document.body.tabIndex = -1;
  //     });
  //   }
  // });

}

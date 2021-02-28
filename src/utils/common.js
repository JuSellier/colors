export function updateClipboard(newClip, onSuccess, onError) {
  navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
    if (result.state == "granted" || result.state == "prompt") {
      navigator.clipboard.writeText(newClip).then(
        function () {
          /* clipboard successfully set */
          onSuccess();
        },
        function () {
          /* clipboard write failed */
          onError();
        }
      );
    }
  });
}

export function destroyDomEl(el) {
  el.parentNode.removeChild(el);
}

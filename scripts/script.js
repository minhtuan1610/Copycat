function copyContent() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard
    .writeText(copyText.value)
    .then(() => {
      console.log("Success");
    })
    .catch((err) => {
      console.log(err);
    });

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}

function copyToClipBoard(contents) {
  // let content = document.getElementById(contents);
  let content = $("#" + contents);

  navigator.clipboard
    .writeText(content.val())
    .then(() => {
      console.log("Success");
    })
    .catch((err) => {
      console.log(err);
    });
  // alert("Copied the text: " + content.val);
}

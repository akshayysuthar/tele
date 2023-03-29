var db = firebase.firestore();

function openpostPage(postId) {
  // redirect to post page
  window.location.href = `post.html?id=${postId}`;
}
function copyText() {
  const range = document.createRange(); // Create a range object
  range.selectNodeContents(document.getElementById("text")); // Select the contents of the p tag
  const selection = window.getSelection(); // Get the current selection object
  selection.removeAllRanges(); // Remove any existing selections
  selection.addRange(range); // Add the new range to the selection
  document.execCommand("copy"); // Copy the selected text to the clipboard
  alert("Text copied!"); // Show a message to the user
}

db.collection("telegram-post")
  // .limit(1)
  .get()
// .orderBy("status")
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      var post = doc.data();
      // display post in homepage
      document.getElementById("post").innerHTML += `
      <div class="card" style="width: 14rem;" onclick="openpostPage('${doc.id}')>
      <img src="${post.imageUrl}" class="card-img-top" alt="...">
      <div class="card-body">
          <!-- The button used to copy the text -->
          <button onclick="copyText()">Copy</button>
          <p class="card-text" id="text" contenteditable>
              ${post.title} (${post.year}) 1080p 720p 480p HDRip x264 AAC ESubs ${post.content}.Mkv

              📤 Download & Streaming Link :-

              🔰1080p :- ${post.link1080p}

              🔰720p :- ${post.link720p}

              🔰480p :- ${post.link480p}</p>

              ${post.status}
      </div>
  </div>
          `;
    });
  });

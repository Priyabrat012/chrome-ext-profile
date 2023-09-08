// // document.addEventListener('DOMContentLoaded', function() {
// //     const fetchTitleButton = document.getElementById('fetchTitleButton');
// //     const titleContainer = document.getElementById('titleContainer');
  
// //     fetchTitleButton.addEventListener('click', async () => {
// //         // get chrome apis // tab info 
// //       const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
// //      // console.log(tab);
// //       const tabTitle = tab.title;
// //       titleContainer.textContent = `Current Tab Title: ${tabTitle}`;
// //     });
// //   });
  
// document.addEventListener('DOMContentLoaded', function() {
//   const fetchTitleButton = document.getElementById('fetchTitleButton');
//   const titleContainer = document.getElementById('titleContainer');

//   const linkedinLinks = [
//     'https://www.linkedin.com/in/profile1',
//     'https://www.linkedin.com/in/profile2',
//     'https://www.linkedin.com/in/profile3'
//   ];
//   let currentIndex = 0;

//   fetchTitleButton.addEventListener('click', async () => {
//     if (currentIndex < linkedinLinks.length) {
//       const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//       const tabTitle = tab.title;

//       const response = await fetch(`http://localhost:8080/api/profile/addProfile`, {
//         method: 'POST',
     
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           name: tabTitle,
//           url: linkedinLinks[currentIndex],
         
//         })
//       });

//      // console.log(response);
//       const data = await response.json();
      
//       titleContainer.textContent = `Saved profile: ${data.name}`;
//       await chrome.tabs.create({ url: linkedinLinks[currentIndex] });
//       currentIndex++;
//     } else {
//       titleContainer.textContent = 'All profiles opened and saved!';
//     }
//   });
// });


document.addEventListener('DOMContentLoaded', function() {
  const likeCountInput = document.getElementById('likeCount');
  const commentCountInput = document.getElementById('commentCount');
  const performActionsButton = document.getElementById('performActionsButton');
  const statusContainer = document.getElementById('statusContainer');

  likeCountInput.addEventListener('input', validateInputs);
  commentCountInput.addEventListener('input', validateInputs);

  async function validateInputs() {
    const likeCount = parseInt(likeCountInput.value, 10);
    const commentCount = parseInt(commentCountInput.value, 10);

    if (!isNaN(likeCount) && !isNaN(commentCount) && likeCount > 0 && commentCount > 0) {
      performActionsButton.removeAttribute('disabled');
    } else {
      performActionsButton.setAttribute('disabled', 'true');
    }
  }

  performActionsButton.addEventListener('click', async () => {
    const likeCount = parseInt(likeCountInput.value, 10);
    const commentCount = parseInt(commentCountInput.value, 10);

    if (isNaN(likeCount) || isNaN(commentCount) || likeCount <= 0 || commentCount <= 0) {
      statusContainer.textContent = 'Please enter valid counts.';
      return;
    }

    // Implement logic to navigate to LinkedIn feed and perform actions.
    // Due to security restrictions and LinkedIn's terms of service, it's not possible to provide a complete code example for automating actions on LinkedIn from a Chrome extension.

    // You would typically use libraries like Puppeteer to automate browser actions.
  });
});

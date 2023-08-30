// document.addEventListener('DOMContentLoaded', function() {
//     const fetchTitleButton = document.getElementById('fetchTitleButton');
//     const titleContainer = document.getElementById('titleContainer');
  
//     fetchTitleButton.addEventListener('click', async () => {
//         // get chrome apis // tab info 
//       const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//      // console.log(tab);
//       const tabTitle = tab.title;
//       titleContainer.textContent = `Current Tab Title: ${tabTitle}`;
//     });
//   });
  
document.addEventListener('DOMContentLoaded', function() {
  const fetchTitleButton = document.getElementById('fetchTitleButton');
  const titleContainer = document.getElementById('titleContainer');

  const linkedinLinks = [
    'https://www.linkedin.com/in/profile1',
    'https://www.linkedin.com/in/profile2',
    'https://www.linkedin.com/in/profile3'
  ];
  let currentIndex = 0;

  fetchTitleButton.addEventListener('click', async () => {
    if (currentIndex < linkedinLinks.length) {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      const tabTitle = tab.title;

      const response = await fetch(`http://localhost:8080/api/profile/addProfile`, {
        method: 'POST',
     
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: tabTitle,
          url: linkedinLinks[currentIndex],
         
        })
      });

      console.log(response);
      const data = await response.json();
      
      titleContainer.textContent = `Saved profile: ${data.name}`;
      await chrome.tabs.create({ url: linkedinLinks[currentIndex] });
      currentIndex++;
    } else {
      titleContainer.textContent = 'All profiles opened and saved!';
    }
  });
});

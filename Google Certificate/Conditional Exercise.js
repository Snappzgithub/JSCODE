window.onload = () => {
    class Episode {
        constructor(title, duration, minutesWatched) {
          this.title = title;
          this.duration = duration;
          

          if (duration === minutesWatched) {
            this.hasBeenWatched = true;
          } else if (minutesWatched < duration) {
            this.hasBeenWatched = false;
          }
        }
      }
      
      let firstEpisode = new Episode('Katips', 45, 45);
      let secondEpisode = new Episode('Maid in malacanang', 45, 10);
      let thirdEpisode = new Episode('The Deleter', 60, 0);
      
      let episodes = [firstEpisode, secondEpisode, thirdEpisode];
      
      const body = document.querySelector('body');
      
      for(let i = 0; i < 3; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('series-frame');
        let newTitle = document.createElement('h2');
        newTitle.innerText = 'Now Showing!';
        let newParagraph = document.createElement('p');

        newParagraph.innerText = `${episodes[i].title}
        
      ${episodes[i].duration} minutes
      ${episodes[i].hasBeenWatched ? 'Already been watched' : 'Not yet watched'}`;
        newDiv.append(newTitle);
        newDiv.append(newParagraph);
        body.append(newDiv);
      }
  };
  

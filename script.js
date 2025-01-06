async function getData() {
    const url = "https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/emk87atKqlUFBq92TIW1ONB81VkPe7keGXYmSBVnUabdCHw?api_key=RGAPI-06b05b6f-d423-4ec5-bfc7-dccd943453d8";
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      let aliGood = false;

      const json = await response.json();

      for (let index = 0; index < json.length; index++) {
        if (json[index].queueType === "RANKED_SOLO_5x5"){
          
          if (json[index].tier == "MASTERS" || json[index].tier == "GRANDMASTERS" || json[index].tier == "CHALLENGER") {
            aliGood = true;
          }
          
          getRank(aliGood, json[index].tier, json[index].rank);
          break;
        };
        
      }

    } catch (error) {
      console.error(error.message);
    }
  }

  function getRank(isMasters, tier, rank) {
    
    if (isMasters) {
      const element = document.getElementById('aliButton');
      element.remove();
      document.getElementById('isHe').innerHTML = "Yes, he is";
      document.getElementById('currentRank').innerHTML = "Current rank - " + tier + " " + rank; 
    }
    else{
      const element = document.getElementById('aliButton');
      element.remove();
      document.getElementById('isHe').innerHTML = "Lmao, no he isn't.";
      document.getElementById('currentRank').innerHTML = "Current rank - " + tier + " " + rank; 
    }
    
}
  
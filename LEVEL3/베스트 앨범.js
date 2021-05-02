function solution(genres, plays) {
    var answer = [];
    const genresPlay = {};
    const genrePlayedNum = [];
    
    const arrayForSort=[];
    
    let obj
    
    
    for(let k=0;k<genres.length;k++){
        if(!genresPlay[genres[k]]){
            genresPlay[genres[k]]=plays[k];
        }else{
            genresPlay[genres[k]]+=plays[k];
        }
    }

    
    for(let i in genresPlay){
        obj = {}
        obj.name = i;
        obj.total = genresPlay[i]
        arrayForSort.push(obj)
    }
    
    const sortedGenres = arrayForSort.sort(function(a,b){
        return b["total"]-a["total"]
    })

    
    for(let k=0;k<genres.length;k++){
        genrePlayedNum.push({
            id : k,
            genre: genres[k],
            played: plays[k]
        }) 
    }

    for(let j of sortedGenres){
        let option = j.name

        const filteredArr =genrePlayedNum.filter((el)=>el.genre===option).sort(function(a,b){
            return b["played"]-a["played"]
        })

        for(let k=0;k<filteredArr.length;k++){
            if(k===2){
                break
            }
            answer.push(filteredArr[k].id)
        }
    }
    
      
    return answer;
}
// Mixed messages generator

function getRandomFrom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

let dictionary = { 
         _articles: ['The', 'A', 'Some', 'My', 'Their'],
         _subjects: ['uncle', 'cat', 'rabbit', 'person', 'stranger', 'mom', 'grandpa', 'horse', 'alien', 'corpse'],
         _actions: ['had', 'went to', 'bit', 'punched', 'jumped over', 'ran into', 'flipped over', 'threw ice at', 'froze', 'tickled', 'gave water to', 'kissed', 'tricked', 'laughed at', 'smirked at', 'greeted'],
         emotionPreReq: ', who was feeling',
         _emotions: ['happy', 'sad', 'grateful', 'tired', 'irritated', 'ticklish', 'hypothermic', 'mad', 'surprised', 'sick', 'dehydrated'],
         _punctuation: ['!', '.', '?', '...', '!!??', ' :)', ' <3'],

         get article() {
            return getRandomFrom(this._articles)
         },

         get subject() {
            return getRandomFrom(this._subjects)
         },

         get action() {
            return getRandomFrom(this._actions)
         },

         get emotion() {
            return getRandomFrom(this._emotions)
         },

         get punctuation() {
            return getRandomFrom(this._punctuation)
         }
    }


let message = (dict) => {
    return `${dict.article} ${dict.subject} ${dict.action} ${dict.article.toLowerCase()} ${dict.subject}${dict.emotionPreReq} ${dict.emotion}${dict.punctuation}`
}

// Build a message from the dictionary object
console.log(message(dictionary))
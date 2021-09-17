function transformTextToTextjustify (text){
    list = [ ]
        for(let i = 0; i < text.length; i += 79){

            limitedtext = text.substring(i, i + 79);
            list.push(limitedtext);
    }
    return list.join('\n');
}

text = "im only happy when it's rains im only happy when it's rains im only happy when it's rains im only happy when it's rains im only happy when it's rains im only happy when it's rains im only happy when it's rains";
transformTextToTextjustify (text)
transformedText = transformTextToTextjustify (text);
console.log('voici le texte justifié',transformedText)


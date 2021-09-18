function transformTextToTextjustify (text){
    list = [ ]
        for(let i = 0; i < text.length; i += 79){

            limitedtext = text.substring(i, i + 79);
            list.push(limitedtext);
    }
    return list.join('\n');
}

module.exports = {
    transformTextToTextjustify: transformTextToTextjustify
};

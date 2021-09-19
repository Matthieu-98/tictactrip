const utils = require("../fonction.js");
describe("String Utils", function () {
    it("le texte devrait être justifié", function () {
        text = "azerty"
        justifiedText = utils.transformTextToTextjustify(text)
        expect(justifiedText).toEqual(text);
    });
    it("le texte d'une longueur supérieur à 80 devrait être justifié", function () {
        text = "im only happy when it's rains im only happy when it's rains im only happy when it's rains im only happy when it's rains im only happy when it's rains im only happy when it's rains im only happy when it's rains"
        justifiedText = utils.transformTextToTextjustify(text)
        resultText = "im only happy when it's rains im only happy when it's rains im only happy when\nit's rains im only happy when it's rains im only happy when it's rains im only\nhappy when it's rains im only happy when it's rains"
        expect(justifiedText).toEqual(resultText);
    });
 });

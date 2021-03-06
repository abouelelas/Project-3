var db = require("../../models");
const router = require("express").Router();
const languageTranslator = require("../../config/apiTranslator");

console.log("translate set up");

// -> /api/translate/test
router.post("/translate", (req, res) => {
    //res.json(languageTranslator);
    console.log("tranlating", req.body.text)
    console.log("user info", req.user)

    let translateParams = {
        text: req.body.text,
        modelId: 'en-fr',
    };
    const translations = [];
    languageTranslator.translate(translateParams)
        .then(translationResult => {

            var translatedPhrase =translationResult.result.translations[0].translation;
            var originalPhrase = req.body.text;
            console.log("translation result", translationResult.result.translations[0].translation)

            translations.push({
                params: translateParams,
                translation: translationResult.result.translations
            });
            db.Flashcard.create({phrase:originalPhrase, translation: translatedPhrase})
            .then(function(flashcard) {
                console.log(flashcard);
                return db.User.findOneAndUpdate({_id:req.user._id},{$push:{flashcards: flashcard._id}})
                
            })
            .then(function(){
                console.log("flashcard created");
            })

            // instead of responsing immeditaly we can REDIRECT 
            // to another route that creates a flash card 
            // form this transation and adds it into the logged in user's flashcards array
            res.json(translations);

            // next translate
            // translateParams = {
            //     text: 'What do you mean? I do not know. What do you want to say?',
            //     modelId: 'en-pt',
            // }
            //res.json(translationResult.result.translations, null, 2);
            //return languageTranslator.translate(translateParams);
        })
        // .then(translationResult => {
        //     translations.push({
        //         params: translateParams,
        //         translation: translationResult.result.translations
        //     });

       
        // })
        .catch(err => {
            console.log('error:', err);
        });
});

module.exports=router;
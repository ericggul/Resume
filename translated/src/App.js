import React, { Component } from "react";
import cookie from "react-cookies";

import { googleTranslate } from "./utils/googleTranslate";

const text = `이보세, 긴 길을 떠나고 있는 나그네여,/
그대는 지금 깊은 두려움과 질투심의 수령에 빠진걸세/
그대는 왜 주변의 낙타들을 비판하면서도,/
그 낙타와 같이 무거운 짐을 짊어지려 하는것일세?/
같은 무게는 같은 길로 이끌고,/
그 길은 수많은 낙타들이 정신적으로 죽어간 길이 아닐세?/
그대는 지금 두려운것이라네./
그대는 아직 그대에 대한 확신이 없네./
왜냐하면 그대 주변의 낙타들이 그대와 완전히 반대되는 철학을 가지고 있기 때문일세./
아니 정확히, 그들은 정확히 반대되는 철학에 세뇌된 것이기 때문일세./
그들은 그 세뇌 밖에서 사고하기를 온몸으로 저항할 것일세./
그러나 나그네여, 생각해보게./
과연 낙타중에 위인이 있었는지 생각해봅세.//
그대는 집단적 파멸 – 너무 집단적이서 파멸적인 성격이 인지되지 않는 – 으로 나아가지는 않을것이라고 나는 믿을세/
왜냐하면 내 생각에 그대에게 웨이트는 어울리지 않기 때문일세`


class App extends Component {
  state = {
    languageCodes: [],
    language: cookie.load("language") ? cookie.load("language") : "en",
    word: cookie.load("word")
      ? cookie.load("word")
      : text
  };

  componentDidMount() {
    // load all of the language options from Google Translate to your app state

    googleTranslate.getSupportedLanguages("en", function(err, languageCodes) {
      getLanguageCodes(languageCodes); // use a callback function to setState
    });

    const getLanguageCodes = languageCodes => {
      this.setState({ languageCodes });
    };
  }

  render() {
    const { languageCodes, language, word } = this.state;
    var texts = word.split('/').map((word, index)=>{
      return <p key = {index}>{word}</p>
    })
    return (
      <div style={this.divStyle}>
        <div style = {this.selectStyle}>
          Select Language <select className= "select-language" value = {language} onChange = {e => this.changeHandler(e.target.value)} style = {this.innerSelectStyle}>
            {languageCodes.map(lang => (<option key = {lang.language} value = {lang.language}>{lang.name}</option>))}
          </select>
        </div>
        <div style = {this.textStyle}>
        <p>{texts}</p>
        </div>
      </div>
    );
  }

  changeHandler = language => {
    let { word } = this.state;
    let cookieLanguage = cookie.load("language");
    let transWord = "";

    const translating = transWord => {
      if (word!== transWord) {
        this.setState({ word: transWord });
        cookie.save("word", transWord, { path: "/" });
      }
    };

    // translate the question when selecting a different language
    if (language !== cookieLanguage) {
      googleTranslate.translate(word, language, function(err, translation) {
        transWord= translation.translatedText;
        translating(transWord);
      });
    }

    this.setState({ language });
    cookie.save("language", language, { path: "/" });
  };

  // just some inline css to center our demo
  divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100vh",
    width: "100wh",
    backgroundColor: "black",
    color: "white"
  };

  selectStyle = {
    marginBottom: "5%"
  };

  innerSelectStyle = {
    marginLeft: "5px"
  }

  textStyle = {
    width: "80%",

  };
}

export default App;
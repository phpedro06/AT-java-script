// incia o quiz
function quiiz() {
    // perguntas para identificar o animal
    var aAquatico = parseFloat(prompt("O seu animal é aquatico?\n1 - sim\n2 - não"))

    // animais terrestres aquatico
    if (aAquatico == 2) {
    var aVoa = parseFloat(prompt("O seu animal voa?\n1 - sim\n2 - não"))
        if (aVoa == 2) {
            var aTerrestre = parseFloat(prompt("O seu animal é terrestre?\n1 - sim\n2 - não"))
                if (aTerrestre == 2) {
                     alert("Então seu animal não está na lista!")

                // animais terrestres
                } else {
                    var pTer1 = parseFloat(prompt("O seu animal é um mamifero?\n1 - sim\n2 - não"))
                        if (pTer1 == 2) {
                            alert("Então seu animal não esta na lista")
                        } else {
                            var pTer2 = parseFloat(prompt("Seu animal é comum do contingente africano?\n1 - sim\n2 - não"))
                                if (pTer2 == 2) {
                                    var pTer3 = parseFloat(prompt("Seu animal é comum do contingente asiatico?\n1 - sim\n2 - não"))
                                        if (pTer3 == 2) {
                                            alert("Então seu animal não esta na lista")
                                        } else {
                                            var pTer4 = parseFloat(prompt("O seu animal é de porte medio?\n1 - sim\n2 - não"))
                                                if (pTer4 == 2) {
                                                    var pTer6 = parseFloat(prompt("O seu animal é de porte grande?\n1 - sim\n2 - não"))
                                                        if (pTer6 == 2) {
                                                            alert("Então seu animal não esta na lista")
                                                        } else {
                                                            var pTer7 = parseFloat(prompt("O seu animal é herbívoro?\n1 - sim\n2 - não"))
                                                                if (pTer7 == 2) {
                                                                    alert("Então seu animal não esta na lista")
                                                                } else {
                                                                    var elefante = parseFloat(prompt("O seu animal é o Elefante, certo?\n1 - sim\n2 - não"))
                                                                        if (elefante == 2) {
                                                                            alert("Me desculpe irei melhorar meus conhecimentos.")
                                                                        } else {
                                                                            alert("Acertei mais uma!")
                                                                        }
                                                                }
                                                        }
                                                } else {
                                                    var pTer5 = parseFloat(prompt("O seu animal é um predador carnivoro?\n1 - sim\n2 não"))
                                                        if (pTer5 == 2) {
                                                            alert("Então seu animal não esta na lista")
                                                        } else {
                                                            var tigre = parseFloat(prompt("O seu animal é o Tigre, certo?\n1 - sim\n2 - não"))
                                                                if (tigre == 2) {
                                                                    alert("Me desculpe irei melhorar meus conhecimentos.")
                                                                } else {
                                                                    alert("Acertei mais uma!")
                                                                }
                                                        }
                                                }
                                        }
                                } else {
                                    var pTer8 = parseFloat(prompt("O seu animal é de porte grande?\n1 - sim\n2 - não"))
                                        if (pTer8 == 2) {
                                            alert("Então seu animal não esta na lista")
                                        } else { 
                                            var pTer9 = parseFloat(prompt("Seu animal é famoso por uma parte especifica de seu corpo?\n1 - sim\n2 - não"))
                                                if (pTer9 == 2) {
                                                    var pTer10 = parseFloat(prompt("Seu animal é famoso pelo seu imenso tamanho?\n1 - sim\n2 - não"))
                                                        if (pTer10 == 2) {
                                                            alert("Então seu animal não esta na lista")
                                                        } else {
                                                            var elefante = parseFloat(prompt("O seu animal é o Elefante, certo?\n1 - sim\n2 - não"))
                                                                if (elefante == 2) {
                                                                    alert("Me desculpe irei melhorar meus conhecimentos.")
                                                                } else {
                                                                    alert("Acertei mais uma!")
                                                                }
                                                        }
                                                } else {
                                                    var pTer11 = parseFloat(prompt("O seu animal é famoso por ter um enorme pescoço?\n1 - sim\n2 - não"))
                                                        if (pTer11 == 2) {
                                                            alert("Então seu animal não esta na lista")
                                                        } else {
                                                            var girafa = parseFloat(prompt("O seu animal é a Girafa, certo?\n1 - sim\n2 - não"))
                                                                if (girafa == 2) {
                                                                    alert("Me desculpe irei melhorar meus conhecimentos.")
                                                                } else {
                                                                    alert("Acertei mais uma!")
                                                                }
                                                        }
                                                }
                                        }
                                }
                        }
                }
        
        // animais que voam
        } else {
            var pVoa1 = parseFloat(prompt("O seu animal é comum de algum pais?\n1 - sim\n2 - não"))
                if (pVoa1 == 2) {
                    var pVoa2 = parseFloat(prompt("O seu animal é conhecido pelo seu QI?\n1 - sim\n2 - não"))
                        if (pVoa2 == 2) {
                            alert("Então seu animal não esta na lista")
                        } else {
                            var pVoa3 = parseFloat(prompt("O seu animal é comumente preto?\n1 - sim\n2 - não"))
                                if (pVoa3 == 2) {
                                    alert("Então seu animal não esta na lista")
                                } else {
                                    var corvo = parseFloat(prompt("O seu animal é o Corvo, certo?\n1 - sim\n2 - não"))
                                        if (corvo == 2) {
                                            alert("Me desculpe irei melhorar meus conhecimentos.")
                                        } else {
                                            alert("Acertei mais uma!")
                                        }
                                }
                        }
                } else {
                    var pVoa4 = parseFloat(prompt("O seu animal é comum de um pais das Americas?\n1 - sim\n2 - não"))
                        if (pVoa4 == 2) {
                            alert("Então seu animal não esta na lista")
                        } else {
                            var pVoa5 = parseFloat(prompt("O seu animal é comum da America do Norte?\n1 - sim\n2 - não"))
                                if (pVoa5 == 2) {
                                    var pVoa6 = parseFloat(prompt("O seu animal é comum da America do Sul?\n1 - sim\n2 - não"))
                                        if (pVoa6 == 2) {
                                            alert("Então seu animal não esta na lista")
                                        } else {
                                            var pVoa7 = parseFloat(prompt("O seu animal é conhecido pela suas cores?\n1 - sim\n2 - não"))
                                                if (pVoa7 == 2) {
                                                    alert("Então seu animal não esta na lista")
                                                } else {
                                                    var arara = parseFloat(prompt("O seu animal é a Arara, certo?\n1 - sim\n2 - não"))
                                                        if (arara == 2) {
                                                            alert("Me desculpe irei melhorar meus conhecimentos.")
                                                        } else {
                                                            alert("Acertei mais uma!")
                                                        }
                                                }
                                        }
                                } else {
                                    var pVoa8 = parseFloat(prompt("O seu animal é um predador?\n1 - sim\n2 - não"))
                                        if (pVoa8 == 2) {
                                            alert("Então seu animal não esta na lista")
                                        } else {
                                            var aguia = parseFloat(prompt("O seu animal é a Aguia, certo?\n1 - sim\n2 - não"))
                                                if (aguia == 2) {
                                                    alert("Me desculpe irei melhorar meus conhecimentos.")
                                                } else {
                                                    alert("Acertei mais uma!")
                                                }
                                    }
                                }
                        }
                }
        } 
        
    // animais aquaticos perguntas    
    } else {
        var pAqua1 = parseFloat(prompt("O seu animal é um mamifero?\n1 - sim\n2 - não"))
            if (pAqua1 == 2) {
            var pAqua2 = parseFloat(prompt("O seu animal é venenoso?\n1 - sim\n2 - não"))
                if (pAqua2 == 2) {
                    var pAqua3 = parseFloat(prompt("O seu animal se alimenta de outros peixes?\n1 - sim\n2 - não"))
                        if (pAqua3 == 2) {
                            alert("Então seu animal não está na lista!")
                        } else {
                            var pAqua4 = parseFloat(prompt("O seu animal é de porte grande?\n1 - sim\n2 - não"))
                                if (pAqua4 == 2) {
                                    alert("Então seu animal não está na lista!")
                                } else {
                                    var tubarao = parseFloat(prompt("O seu animal é o Tubarão, estou certo?\n1 - sim\n2 - não"))
                                        if (tubarao == 2) {
                                            alert("Me desculpe irei melhorar meus conhecimentos.")
                                        } else {
                                            alert("Acertei mais uma!")
                                        }
                                }
                        } 
                } else {
                    var pAqua5 = parseFloat(prompt("O seu animal infla quando esta com medo?\n1 - sim\n2 - não"))
                        if (pAqua5 == 2) {
                            alert("Então seu animal não está na lista!")
                        } else {
                            var baiacu = parseFloat(prompt("O seu animal é o Baiacu, estou certo?\n1 - sim\n2 - não"))
                                if (baiacu == 2) {
                                    alert("Me desculpe irei melhorar meus conhecimentos.")
                                } else {
                                    alert("Acertei mais uma!")
                                }
                        }
                        
                }
        } else {
            var pAqua6 = parseFloat(prompt("O seu animal é de porte grande?\n1 - sim\n2 - não"))
                if (pAqua6 == 2) {
                    alert("Então seu animal não está na lista!")
                } else {
                    var pAqua7 = parseFloat(prompt("O seu animal se alimenta de outros peixes?\n1 - sim\n2 - não"))
                        if (pAqua7 == 2) {
                            alert("Então seu animal não está na lista!")
                        } else {
                            var pAqua8 = parseFloat(prompt("O seu animal é o maior mamifero aquatico do mundo?\n1 - sim\n2 - não"))
                                if (pAqua8 == 2) {
                                    alert("Então seu animal não está na lista!")
                                } else {
                                    var baleia = parseFloat(prompt("O seu animal é a Baleia, estou certo?\n1 - sim\n2 - não"))
                                        if (baleia == 2) {
                                            alert("Me desculpe irei melhorar meus conhecimentos.")
                                        } else {
                                            alert("Acertei mais uma!")
                                        }
                                }
                        } 
                }
        }
    }
}
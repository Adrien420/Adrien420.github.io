window.onload = function() {
    //Fonction permettant la création des structures visuelles pour les tournois
    var createDesign = function(ctx, size, width, height) {
        //Longueur des traits verticaux fractionnés (diffèrent en fonction de la qté de "participants")
        let decoupageHeight = 0;
        //Nombre de "parties" (16èmes, 8èmes, quart de finale...)
        let iterations = 0;
        if (size == 16) {
            //Cas d'un tournoi à 16 "participants"
            decoupageHeight = height/(3*4);
            iterations = 4;
        }
        else {
            //Cas d'un tournoi à 32 "participants"
            decoupageHeight = height/(3*5);
            iterations = 5
        }
        //Départ du dessin sur le canvas (coordonnée x) pour le motif
        let depart = 0;
        //Décalage de x pour la "partie" suivante
        let ajout = 0;
        for (let h = 0; h < iterations; h++) {
            //taille des traits horizontaux (varie en fonction de la "partie")
            let taille = (width-ajout*2)/(size/2**h-1);
            //taille des traits verticaux au complet multiplié par le nbre d'itérations (pour avoir ensuite le départ du motif en hauteur)
            let tailleH = h*decoupageHeight*3;
            //Boucle pour dessiner chaque motif sur une ligne
            //Une itération = un motif
            for (let i = 0; i < size/2; i++) {
                depart = i*2*taille + ajout;
                //Initialisation
                ctx.beginPath();
                //Coordonnées du départ
                ctx.moveTo(depart, height-tailleH);
                //Dessin d'une ligne
                ctx.lineTo(depart, height-decoupageHeight-tailleH);
                //"Levée du stylo pour le déplacer au prochain endroit"
                ctx.stroke();
                ctx.moveTo(depart, height-2*decoupageHeight-tailleH);
                ctx.lineTo(depart, height-3*decoupageHeight-tailleH);
                ctx.lineTo(taille+depart, height-3*decoupageHeight-tailleH);
                ctx.lineTo(taille+depart, height-2*decoupageHeight-tailleH);
                ctx.stroke();
                ctx.moveTo(taille+depart, height-1*decoupageHeight-tailleH);
                ctx.lineTo(taille+depart, height-tailleH);
                ctx.stroke();
            }
            ajout += taille/2;
        }
    }
    var canvasDemo1 = document.getElementById("demo1");
    var ctxDemo1 = canvasDemo1.getContext('2d');
    createDesign(ctxDemo1, 16, 400, 400);
    var canvasDemo2 = document.getElementById("demo2");
    var ctxDemo2 = canvasDemo2.getContext('2d');
    createDesign(ctxDemo2, 32, 400, 400);

    var sizeChoosen = function() {
        var selectSize = document.getElementById("selectSize");
        selectSize.style.display = "none";
    }
    canvasDemo1.addEventListener("click", sizeChoosen);
    canvasDemo2.addEventListener("click", sizeChoosen);

    var inputFiles = document.getElementById("fichiers");
    var imgDisplay = document.getElementById("imageDisplay");
    
    var handleFiles = function() {
        var currentFiles = this.files;
        for (let i = 0; i < currentFiles.length; i++) {
            var image = document.createElement("img");
            image.src = window.URL.createObjectURL(currentFiles[i]);
            imgDisplay.appendChild(image);
        }
    }

    inputFiles.addEventListener("change",handleFiles);
}
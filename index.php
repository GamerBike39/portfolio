<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800;8..144,900;8..144,1000&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <title>Portfolio</title>
</head>

<body>
    <img class="smoke" src="assets/img/illustration/fond2.gif" alt="">
    <div class="cursor"></div>
    <div class="cursor2"></div>
    <div id="containerHome" class="home">
        <header class="desktopNav">
            <a class="flex name" href="#">
                <span>Julien</span>
                <span>MATHIEU</span>
            </a>
            <div class="info">
                <div class="left flex">
                    <div class="contact flex">
                        <ul>
                            <li>Studio of JULIEN MATHIEU</li>
                            <li>Web Developer</li>
                            <a href="https://github.com/GamerBike39" target="_blank"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg></a>
                            <a href="https://www.linkedin.com/in/julienmathieu-devweb/" target="_blank"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                        </ul>
                        <ul>
                            <li> France Jura</li>
                            <li class="email"><a
                                    href="mailto:julien.mathieu86@orange.fr"><strong>julien.mathieu86@orange.fr</strong>
                                </a></li>
                        </ul>
                    </div>
                    <nav class="links">
                        <ul>
                            <li class="a-propos btnAbout"><a href="#apropos"><span>01</span> <strong>À
                                        propos</strong></a></li>
                            <li class="blog-dekstop"><a href="/blog/"><span>02</span> <strong>Blog</strong></a></li>
                            <li class="contactBtn"><a href="#contact"><span>03</span> <strong>Contact</strong></a></li>
                        </ul>
                    </nav>
                    </nav>
                </div>

                <div class="right">
                </div>
                <div class="copyright"></div>
            </div>
        </header>

        <div class="containerProject">
            <h3 class="btn-modalPop rubrique">POPCODE</h3>
            <h3 class="btn-modalAllo">ALLOJYVE</h3>
            <h3 class="btn-modalCrea">CREATIVES</h3>
            <h3 class="btn-modalBoots">CAPGEMEN</h3>
        </div>
    </div>

    <div class="modal modalPop displayNone">
        <div class="overlay modal-trigger"></div>
        <div class="flexJCCAIC">
            <span class="close-modal closePop">❌</span>
            <h4><strong>POPCODE</strong></h4>

            <div class="my-sliderPop">
                <img src="assets/img/popIntro.jpg" alt="capture d'écran de la page d'accueil du site">
                <img src="assets/img/popAccueil.jpg" alt="capture d'écran de la page d'accueil du site">
                <img src="assets/img/popJeu.jpg" alt="aperçu de l'écran de jeu">
                <img src="assets/img/popInput.jpg" alt="capture d'écran de la page d'accueil du site">
                <img src="assets/img/popInfo.jpg" alt="capture d'écran de la page d'accueil du site">
            </div>

            <p>Projet réalisé durant ma formation Access Code School.</p>
            <p>PopCode est inspiré du site PopCornTV ou le but est de chercher et retrouver les références de différents
                langages de programmation cachés dans une illustration.</p>
            <p>Ce projet m'a permis de perfectionner mon utilisation de Javascript avec l'implémentation de différentes
                fonctions, telles que la prise en charge des bonnes et mauvaises réponses, ainsi qu'une fonction zoom
                pour mieux visualiser les éléments</p>
            <a class="learnMore" href="https://github.com/GamerBike39/ProjectPopCode" target="_blank"><svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg></a> <a href="https://gamerbike39.github.io/ProjectPopCode/" target="_blank">Visiter le
                site</a>
        </div>
    </div>

    <div class="modal modalAllo displayNone">
        <div class="overlay modal-trigger"></div>
        <div class="flexJCCAIC">
            <span class="close-modal closeAllo">❌</span>
            <h4><strong>ALLOJYVÉ</strong></h4>

            <div class="my-sliderAllo">
                <img src="assets/img/allojyve-logo.jpg" alt="aperçu de l'écran de jeu">
                <img src="assets/img/allojyve-accueil.jpg" alt="capture d'écran de la page d'accueil du site">
                <img src="assets/img/allojyve-modale.jpg" alt="capture d'écran de la page d'accueil du site">
            </div>

            <p>Projet réalisé durant ma formation Access Code School.</p>
            <p>Allojyvé est un projet qui a comme fonction d'utilisé l'API de The Movie Database, pour faire un suivie
                des sorties populaires, à venir, et en cours.</p>
            <p>La contrainte de ce projet était de ne pas utiliser d'HTML et de tout générer avec Javascript</p>
            <a class="learnMore" href="https://github.com/GamerBike39/allojyve2" target="_blank"><svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg></a> <a href="#">Visiter le site</a>
        </div>
    </div>

    <div class="modal modalCrea displayNone">
        <div class="overlay modal-trigger"></div>
        <div class="flexJCCAIC">
            <span class="close-modal closeCrea">❌</span>
            <h4><strong>CREATIVES</strong></h4>

            <div class="my-sliderCreat">
                <img src="assets/img/creativeAccueil.jpg" alt="capture d'écran de la page d'accueil du site">
                <img src="assets/img/creative2.jpg" alt="">
                <img src="assets/img/creativeAkita.jpg" alt="">
            </div>

            <p>Projet réalisé durant ma formation Access Code School.</p>
            <p>Allojyvé est un projet qui a comme fonction d'utilisé l'API de The Movie Database, pour faire un suivie
                des sorties populaires, à venir, et en cours.</p>
            <p>La contrainte de ce projet était de ne pas utiliser d'HTML et de tout générer avec Javascript</p>
            <a class="learnMore" href="https://github.com/GamerBike39/projet-1-creative" target="_blank"><svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg></a> <a href="#">Visiter le site</a>
        </div>
    </div>

    <div class="modal modalBoots displayNone">
        <div class="overlay modal-trigger"></div>
        <div class="flexJCCAIC">
            <span class="close-modal closeBoots">❌</span>
            <h4><strong>CAPGEMEN</strong></h4>

            <div class="my-sliderBoots">
                <img src="assets/img/bootstrapAccueil.jpg" alt="capture d'écran de la page d'accueil du site">
                <img src="assets/img/bootstrap2.jpg" alt="">
                <img src="assets/img/bootstrap3.jpg" alt="">
            </div>

            <p>Projet réalisé durant ma formation Access Code School.</p>
            <p>We Take est un projet qui avait pour but de me familiariser avec le frameworks CSS Boostsrap</p>
            <p>Le but était d'apprendre à découvrir un frameworks, lire la documentation, et utiliser le moins possible
                de CSS custom.</p>
            <a class="learnMore" href="https://github.com/GamerBike39/ProjectBootstrap" target="_blank"><svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg></a> <a href="#">Visiter le site</a>
        </div>
    </div>

    <div id="apropos" class="containerAbout displayNone">
        <div class="flex containerRubrique">
            <h4>À propos de moi</h4>
            <a href="#qui" class="qui">
                <h5>Qui suis-je ?</h5>
            </a>
            <a href="#skills" class="skills">
                <h5>Mes compétences</h5>
            </a>
            <a href="#exp" class="exp">
                <h5>Mes expériences</h5>
            </a>
            <a href="#hobbies" class="hobbies">
                <h5>Hobbies</h5>
            </a>
        </div>
        <div class="containerQui">
            <h4>Qui suis-je ?</h4>
            <p>Je m'appelle <strong>Julien</strong>,
                <stong>Passionné depuis toujours par l'informatique et la culture numérique, je suis actuellement en
                    formation à
                    <strong>l'Acces Code School</strong> pour devenir développeur web et web mobile.</p>
            <p>Très curieux, je suis toujours en train de me former pour devenir meilleur, apprendre de nouveaux
                langages, perfectionner mes connaissances pour proposer toujours le meilleur à mes clients.</p>
            <img src="assets/img/illustration/bonhommePrezHappyNature.png" alt="">

        </div>

        <div class="containerSkills displayNone">
            <h4>Mes Compétences</h4>
            <p>J'ai durant mes projets eu l'occasion d'utiliser plusieurs langages. Ma curiosité me pousse à découvrir
                sans cesse de nouvelles choses et repousser les limites de mes connaissances. Donc si vous avez un
                projet avec une techno que je ne maîtrise pas (encore), je m'adapterais, et me ferais une joie de
                pouvoir ajouter de nouvelles compétences.</p>
            <p></p>
            <div class="logoProg">
                <div class="html">
                    <img src="assets/img/logo/HTML.svg" alt="logo de html">
                </div>
                <div class="css">
                    <img src="assets/img/logo/CSS.svg" alt="logo de CSS">
                </div>
                <div class="javascript">
                    <img src="assets/img/logo/javascript.svg" alt="logo de javascript">
                </div>
                <div class="php">
                    <img src="assets/img/logo/PHP.svg" alt="logo de php">
                </div>
                <div class="bootstrap">
                    <img src="assets/img/logo/Bootstrap_logo.svg" alt="logo de bootstrap">
                </div>
                <div class="figma">
                    <img src="assets/img/logo/Figma.svg" alt="logo de figma">
                </div>
                <div class="laravel">
                    <img src="assets/img/logo/Laravel.svg" alt="logo de Laravel">
                </div>
                <div class="vue">
                    <img src="assets/img/logo/Vue.js_Logo_2.svg" alt="logo de vue">
                </div>
                <div class="wordpress">
                    <img src="assets/img/logo/Wordpress-Logo.svg" alt="logo de wordpress">
                </div>
                <div class="github">
                    <img src="assets/img/logo/Octicons-mark-github.svg" alt="logo de github">
                </div>
                <div class="gsap">
                    <img src="assets/img/logo/gsap-greensock.svg" alt="logo de greensock">
                </div>
                <div class="tailwind">
                    <img src="assets/img/logo/Tailwind_CSS_Logo.svg" alt="logo tailwind">
                </div>
            </div>
        </div>

        <div class="containerMyExp displayNone">
            <h4>Mes expériences</h4>
            <div class="experiences">
                <p>
                    Après un début de carrière dans la viticulture, j'ai décidé de changer de carrière, en faisant ce
                    que j'aimais faire, c'est à dire de la programmation.
                </p>
                <p>Bien qu'ayant commencé très tôt en programmant des petits jeux en basic sur ma calculatrice, ce n'est
                    que bien plus tard que j'ai repris le code.</p>
                <p>J'ai eu l'honneur d'intégrer la formation ACCESS CODE SCHOOL à Lons le Saunier et de réaliser des
                    projets géniaux pour me replonger dans le code.</p>
                <p>Des projets comme PopCode (jeu inspiré de PopCornTV), BlaBlaCampus (inspiré de BlaBla Car). Des
                    projets vraiment intéressant qui couvrent un ensemble de compétences nécessaire pour devenir un bon
                    développeur.</p>
            </div>
        </div>

        <div class="containerHobbies displayNone">
            <h4>Mes hobbies</h4>
            <p>Parcequ'il n'y a pas que l'informatique dans la vie, sortir se promener dans la nature, que ce soit à
                pied pour de la randonnée, ou en VTT avec l'association <a
                    href="https://www.instagram.com/montpoupetbikepark/" target="_blank"><strong>Mont Poupet Bike
                        Park</strong></a></p>
            <p>Sans oublier le jeux vidéo.</p>
            <img src="assets/img/bgBike.png" alt="illustration de mountain Bike">
        </div>
    </div>


    <div class="contact">
        <img class="smoke" src="assets/img/illustration/fond2.gif" alt="">
        <div class="containerContact" id="contact">
            <h4>Contact</h4>
            <p>Si vous avez un projet ou une idée, contactez-moi !</p>
            <div class="formulaire">
                <form method="post">
                    <div class="form-group">
                        <label for="nom">Nom</label>
                        <input type="text" class="form-control" id="nom" name="nom" placeholder="Votre Nom">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" name="email" placeholder="Votre email">
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea class="form-control" id="message" name="message" rows="3"
                            placeholder="Votre message"></textarea>
                    </div>
                    <button type="submit" onclick="sendData({test:'ok'})" class="btn btn-primary">Envoyer</button>
                </form>
            </div>
        </div>
    </div>
    <?php
if(isset($_POST['nom']) && isset($_POST['email']) && isset($_POST['message'])){
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = "j.mathieu@codeur.online";
    $subject = "Message de ".$nom;
    $body = $message;
    $headers = "From: ".$email;
    mail($to, $subject, $body, $headers);
}
// avertir sil le mail est bien envoyé ou non sur la page
if(isset($_POST['nom']) && isset($_POST['email']) && isset($_POST['message'])){
    echo "'Votre message a bien été envoyé !'";
}
?>


    ?>
    <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
    <script src="assets/js/ztext.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js"></script>
    <script src="assets/js/app.js"></script>
</body>

</html>
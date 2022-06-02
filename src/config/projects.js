import {Table} from "@mantine/core";
import {
    Welcome,
    Login,
    Orders,
    OrderDetails,
    Account,
} from "../images/native";
import {DB} from "../images/web";
import {
    CreerRedigerArticle,
    DesabonnementNewsletter,
    EnregistrerNewsletter,
    FooterImg,
    GererArticlesRubriques,
    GererRedacteur,
    NavbarImg,
    VisiteCatalogue,
} from "../images/web/p1";
import {
    CommanderProduit,
    CommenterProduit,
    EnvoyerMail,
    GererCafes,
    GererCommande,
    InformerCommande,
    SuivreCommande,
} from "../images/web/p2";

const content = {
    afterwork_web: {
        title: "AfterWork : Site internet",
        type: "Application React Web",
        context:
            "Cette application web doit servir pour un magasin de café : elle permet de commander à table grâce à une tablette. (En lien avec le projet AFTERWORK : APPLICATION PORTABLE)",
        languages: ["PHP", "HTML", "JavaScript", "CSS"],
        tools: [
            "Symfony",
            "Composer",
            "MariaDB",
            "Bootstrap",
            "Git",
            "SqlDBM",
        ],
        content: (
            <>
                Pour effectuer ce projet, j'ai du réaliser 2 parties différentes :
                L'application et l'API.
                <h3 className="text-lg mt-6">L'API :</h3>
                <div className="mt-3">
                    L'API est basé sur la base de données suivante :
                    <img src={DB} alt="base de données du projet"/>
                </div>
                <div className="mt-6">
                    Pour mettre en place l'API, j’ai utilisé le framework Symfony. <br/>
                    Les routes concernant l'authentification, la liste des produits, des
                    catégories, des rôles sont accessibles sans connexion / sans token
                    (Uniquement les routes avec méthodes de GET) et ont des permissions
                    d’accès.
                </div>
                <div className="mt-6">
                    Voici les différentes routes disponibles pour l'application :
                    <div className="flex justify-center">
                        <Table
                            striped
                            highlightOnHover
                            className="w-auto"
                            style={{borderWidth: "1px", borderColor: "#373A40"}}
                        >
                            <thead>
                            <tr>
                                <th>Route</th>
                                <th>Méthode</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>/api/articles</td>
                                <td>GET</td>
                                <td>Récupérer tous les articles</td>
                            </tr>
                            <tr>
                                <td>/api/articles/[idArticle]</td>
                                <td>GET</td>
                                <td>Récupérer un article suivant son id</td>
                            </tr>
                            <tr>
                                <td>/api/articles</td>
                                <td>POST</td>
                                <td>Créer un nouvel article</td>
                            </tr>
                            <tr>
                                <td>/api/articles/[idRubric]</td>
                                <td>GET</td>
                                <td>Récupérer les articles suivant un id de rubrique</td>
                            </tr>
                            <tr>
                                <td>/api/commandedeclinaisons/[idCommande]</td>
                                <td>GET</td>
                                <td>Récupérer une commande déclinaison suivant l’id d’une command</td>
                            </tr>

                            <tr>
                                <td>/api/commandes</td>
                                <td>GET</td>
                                <td>Récupérer toutes les commandes</td>
                            </tr>
                            <tr>
                                <td>/api/commandes/[idCommande]</td>
                                <td>PUT</td>
                                <td>Modifier une commande</td>
                            </tr>
                            <tr>
                                <td>/api/categories</td>
                                <td>GET</td>
                                <td>Récupérer toutes les catégories</td>
                            </tr>
                            <tr>
                                <td>/api/categories/withProduct</td>
                                <td>GET</td>
                                <td>Récupérer toutes les catégories avec les articles qui lui sont associés</td>
                            </tr>

                            <tr>
                                <td>/api/categories/[idCategorie]</td>
                                <td>GET</td>
                                <td>Récupérer une catégorie suivant son id</td>
                            </tr>
                            <tr>
                                <td>/api/categories</td>
                                <td>POST</td>
                                <td>Créer une nouvelle catégorie</td>
                            </tr>

                            <tr>
                                <td>/api/categories/[idCategorie]</td>
                                <td>PUT</td>
                                <td>Modifier une catégorie</td>
                            </tr>
                            <tr>
                                <td>/api/categories/[idCategorie]</td>
                                <td>DELETE</td>
                                <td>Supprimer une catégorie</td>
                            </tr>
                            <tr>
                                <td>/api/declinaisons</td>
                                <td>GET</td>
                                <td>Récupérer toutes les déclinaisons</td>
                            </tr>

                            <tr>
                                <td>/api/declinaisons/[idDeclinaison]</td>
                                <td>GET</td>
                                <td>Récupérer une déclinaison suivant son id</td>
                            </tr>
                            <tr>
                                <td>/api/declinaisons</td>
                                <td>POST</td>
                                <td>Créer une déclinaison</td>
                            </tr>
                            <tr>
                                <td>/api/declinaisons/[idDeclinaison]</td>
                                <td>PUT</td>
                                <td>Modifier une déclinaison</td>
                            </tr>
                            <tr>
                                <td>/api/roles</td>
                                <td>GET</td>
                                <td>Récupérer tout les rôles</td>
                            </tr>
                            <tr>
                                <td>/api/rubriques</td>
                                <td>GET</td>
                                <td>Récupérer toutes les rubriques</td>
                            </tr>

                            <tr>
                                <td>/api/rubriques/[idRubrique]</td>
                                <td>GET</td>
                                <td>Récupérer une rubrique suivant son id</td>
                            </tr>
                            <tr>
                                <td>/api/rubriques</td>
                                <td>POST</td>
                                <td>Créer une rubrique</td>
                            </tr>
                            <tr>
                                <td>/api/articles</td>
                                <td>POST</td>
                                <td>Créer un article</td>
                            </tr>
                            <tr>
                                <td>/api/rubriques/[idRubrique]</td>
                                <td>PUT</td>
                                <td>Modifier une rubrique</td>
                            </tr>
                            <tr>
                                <td>/api/employes</td>
                                <td>GET</td>
                                <td>Récupérer tout les employés</td>
                            </tr>
                            <tr>
                                <td>/api/employes/[idEmploye]</td>
                                <td>GET</td>
                                <td>Récupérer un employe suivant son id</td>
                            </tr>
                            <tr>
                                <td>/api/employes</td>
                                <td>PUT</td>
                                <td>Modifier un employé</td>
                            </tr>
                            <tr>
                                <td>/api/produits</td>
                                <td>GET</td>
                                <td>Récupérer tout les produits</td>
                            </tr>
                            <tr>
                                <td>/api/produits/categorie/[idCategorie]</td>
                                <td>GET</td>
                                <td>Récupérer les produits suivant un id catégorie</td>
                            </tr>
                            <tr>
                                <td>/api/produits/[idProduit]</td>
                                <td>GET</td>
                                <td>Récupérer un produit suivant son id</td>
                            </tr>
                            <tr>
                                <td>/api/produits</td>
                                <td>POST</td>
                                <td>Créer un produit</td>
                            </tr>
                            <tr>
                                <td>/api/produits</td>
                                <td>PUT</td>
                                <td>Modifier un produit</td>
                            </tr>
                            <tr>
                                <td>/api/produits</td>
                                <td>DELETE</td>
                                <td>Supprimer un produit</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
                <h3 className="text-lg mt-6">L'application web :</h3>
                <div className="mt-3">
                    Cette application est composé de différents fonctionnalités
                    <div className="flex flex-col">
                        <div className="mt-5">
                            - Navbar de chaque page
                        </div>
                        <div className="mt-5">
                            - Footer de chaque page
                        </div>
                        <div className="mt-5">
                            - Consulter : En tant que visiteur, je peux naviguer sur le site
                            vitrine sans être connecté afin de découvrir le catalogue des produits
                        </div>
                        <div className="mt-5">
                            - Rédiger une page d’article: En tant que rédacteur, je peux
                            rédiger ou changer une page afin d’informer les visiteurs. Les
                            pages d’informations sont regroupées par “Rubrique”.
                        </div>
                        <div className="mt-5">
                            - Gérer les rubriques : En tant que rédacteur, je peux gérer les
                            différentes rubriques afin d’organiser la navigation. Les
                            “Rubriques” regroupent des pages d’articles.
                        </div>
                        <div className="mt-5">
                            - Gérer les rédacteurs : En tant que d’administrateur, je peux
                            gérer les rédacteurs afin de les encadrer/administrer (créer,
                            révoquer, renouveler le mot de passe)
                        </div>
                        <div className="mt-5">
                            - S’abonner à la newsletter : en tant que visiteur, je peux
                            laisser mes coordonnées afin de recevoir des offres
                            promotionnelles.
                        </div>
                        <div className="mt-5">
                            - Se désabonner à la newsletter : en tant qu’abonné à la
                            newsletter, je peux me désabonner à la newsletter afin de ne plus
                            la recevoir.
                        </div>
                        <div className="mt-5">
                            - Commander une consommation : en tant que visiteur, je peux
                            commander mes consommation
                        </div>
                        <div className="mt-5">
                            - Commenter une consommation : En tant que visiteur, je peux
                            commenter une dégustation pour partager mon avis avec les autres
                            consommateurs.
                        </div>
                        <div className="mt-5">
                            - Gérer les offres : en tant que d’administrateur je peux gérer
                            les offres afin de les activer ou désactiver afin de les mettre en
                            corrélation avec notre stock en salle de dégustation.
                        </div>
                    </div>
                </div>
            </>
        ),
        sources: [
            "https://github.com/Lord-forgos/AfterWorks_front",
            "https://github.com/Lord-forgos/AfterWorks_api",
        ],
    },
    afterwork_app: {
        title: "AfterWork : Application mobile",
        type: "Application React Native",
        context: (
            <>
                Cette application protable doit servir pour un magasin de café : elle
                permet aux employés de consulter et gérer les commandes des clients. (En
                lien avec le projet AfterWork : Site internet).
            </>
        ),
        languages: ["PHP", "JavaScript"],
        tools: [
            "Symfony",
            "Composer",
            "MariaDB",
            "Expo",
            "Git",
        ],
        content: (
            <>
                <div className="mb-5">
                    Cette application est composé de 4 écrans différents
                    <br/>
                </div>

                <div className="flex flex-col">
                    <div className="mt-5">
                        - Écran de connexion
                        Pour se connecter à l'application, il faut utiliser un compte
                        employé créé sur l'application web (En lien avec le projet AfterWork : Site internet)
                    </div>
                    <div className="mt-5">
                        - Écran des commandes
                        Sur cet écran, il est possible de voir toutes les commandes
                    </div>
                    <div className="mt-5">
                        - Écran des détails d'une commande
                        Il est possible de passer à l'état de commande suivant
                    </div>
                    <div className="mt-5">
                        - Écran de détail du compte actuel
                    </div>
                </div>

                <div className="mt-10">
                    Ce projet communique avec l'API réalisée pour le projet AfterWork : Site internet. <br/>
                    En effet, les commandes passées sur l'application web se retrouvent
                    sur l'application protable.
                </div>
            </>
        ),
        sources: [
            "https://github.com/Lord-forgos/AfterWorks_reactNative",
            "https://github.com/Lord-forgos/AfterWorks_api",
        ],
    },
    antikcube: {
        title: "AntikCube : Plugins",
        type: "Plugins Java",
        context:
            "Le projet Antikcube est un serveur multijoueur sur le jeu Minecraft. J'ai pu développer une partie des fonctionnalités en jeu : les plugins.",
        languages: ["Java", "SQL"],
        tools: [
            "Java Development Kit 17",
            "Spigot API",
            "Maven",
            "Git",
        ],
        content: (
            <>
                Ce projet est composé de plusieurs plugins/ajouts pour améliorer au
                mieux le serveur de jeu.
                <div className="mt-6">
                    Plugins Spigot (serveur de jeu) :
                    <ul className="list-disc mt-3">
                        <li className="ml-5">
                            AntikJob : Le plugin principale qui rajoute tout un système de métier pour les joueurs.
                        </li>
                        <li className="ml-5">
                            FarmZones : Structures pouvant être capturées par des joueurs pour leurs produire des ressources.
                            Ses structures sont placées par les administrateurs du serveur.
                        </li>
                    </ul>
                </div>
                <div className="mt-6">
                    <strong>
                        L'accès aux code sources plugins reste privé. En effet, ces plugins
                        sont destinés à Antikcube et donc non au public.
                    </strong>
                </div>
            </>
        ),
        sources: [],
    },
};

export default content;

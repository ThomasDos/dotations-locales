import { SubHeaderSidePage } from "components/ui";

export default function DeclarationAccessibilite() {
    return (
        <>
            <SubHeaderSidePage
                title="Déclaration d'Accessibilité"
                maj="Dernière mise à jour : 10 mai 2023"
            />
            <div className="pt-3 pb-14 px-4 md:px-0 md:w-8/12 mx-auto flex flex-col">
                <p>
                    <span>Incubateur des Territoires</span> s&apos;engage à
                    rendre son service accessible, conformément à l&apos;article
                    47 de la loi n° 2005-102 du 11 février 2005.
                </p>
                <p>
                    Cette déclaration d&apos;accessibilité s&apos;applique à{" "}
                    <strong>Dotations Locales</strong>
                    <span>
                        {" "}
                        (<span>https://dotations.incubateur.anct.gouv.fr</span>)
                    </span>
                    .
                </p>
                <h2>État de conformité</h2>
                <p>
                    <strong>Dotations Locales</strong> est{" "}
                    <strong>
                        <span data-printfilter="lowercase">non conforme</span>
                    </strong>{" "}
                    avec le{" "}
                    <abbr title="Référentiel général d'amélioration de l'accessibilité">
                        RGAA
                    </abbr>
                    . <span>Le site n&apos;a encore pas été audité.</span>
                </p>
                <h2>Contenus non accessibles</h2>
                <h2>Amélioration et contact</h2>
                <p>
                    Si vous n&apos;arrivez pas à accéder à un contenu ou à un
                    service, vous pouvez contacter le responsable de{" "}
                    <span>Dotations Locales</span> pour être orienté vers une
                    alternative accessible ou obtenir le contenu sous une autre
                    forme.
                </p>
                <ul className="flex flex-col">
                    <li>
                        E-mail&nbsp;:{" "}
                        <a href="mailto:contact-dotations-locales@anct.gouv.fr">
                            contact-dotations-locales@anct.gouv.fr
                        </a>
                    </li>

                    <li>
                        Adresse&nbsp;:{" "}
                        <span>
                            Agence Nationale de la Cohésion des Territoires,
                            Mission incubateur de services numériques, 20,
                            avenue de Ségur, TSA 10717, 75 334 Paris Cedex 07
                        </span>
                    </li>
                </ul>
                <p>
                    Nous essayons de répondre dans les{" "}
                    <span>3 jours ouvrés</span>.
                </p>
                <h2>Voie de recours</h2>
                <p>
                    Cette procédure est à utiliser dans le cas suivant&nbsp;:
                    vous avez signalé au responsable du site internet un défaut
                    d&apos;accessibilité qui vous empêche d&apos;accéder à un
                    contenu ou à un des services du portail et vous n&apos;avez
                    pas obtenu de réponse satisfaisante.
                </p>
                <p>Vous pouvez&nbsp;:</p>
                <ul className="flex flex-col">
                    <li>
                        Écrire un message au{" "}
                        <a href="https://formulaire.defenseurdesdroits.fr/">
                            Défenseur des droits
                        </a>
                    </li>
                    <li>
                        Contacter{" "}
                        <a href="https://www.defenseurdesdroits.fr/saisir/delegues">
                            le délégué du Défenseur des droits dans votre région
                        </a>
                    </li>
                    <li>
                        Envoyer un courrier par la poste (gratuit, ne pas mettre
                        de timbre)&nbsp;:
                        <br />
                        Défenseur des droits
                        <br />
                        Libre réponse 71120 75342 Paris CEDEX 07
                    </li>
                </ul>
            </div>
        </>
    );
}

import SectionMentionsLegales from "components/mentionsLegales/SectionMentionsLegales";
import { SubHeaderSidePage } from "components/ui";
import Link from "next/link";

export default function MentionsLegales() {
    return (
        <>
            <SubHeaderSidePage
                title="Mentions Légales"
                maj="Dernière mise à jour : 18 septembre 2022"
            />
            <div className="pt-3 pb-14 px-4 md:px-0 md:w-8/12 mx-auto flex flex-col">
                <SectionMentionsLegales title="Editeur">
                    <div>
                        <span>
                            Ce site est édité par l&apos;équipe de
                            l&apos;Incubateur des Territoires, une mission de
                            l&apos;Agence Nationale de la Cohésion des
                            Territoires.
                        </span>
                        <br />
                        <br />
                        <span>
                            <Link
                                href="https://agence-cohesion-territoires.gouv.fr/"
                                rel="noopener noreferrer"
                                target="_"
                            >
                                Agence nationale de la cohésion des territoires
                            </Link>
                            <br />
                            Mission incubateur de services numériques
                            <br />
                            20, avenue de Ségur, TSA 10717, 75 334 Paris Cedex
                            07
                        </span>
                        <br />
                        <br />
                        <span>+33 1 85 58 60 00</span>
                    </div>
                </SectionMentionsLegales>

                <SectionMentionsLegales title="Directeur de la publication">
                    <div>
                        <span>
                            Julie Ripa, Directrice, Mission Incubateur des
                            Territoires
                        </span>
                    </div>
                </SectionMentionsLegales>

                <SectionMentionsLegales title="Informations techniques">
                    <div>
                        <span>
                            Ce site est conçu et développé par l&apos;équipe
                            Dotations Locales de l&apos;Incubateur des
                            Territories.De nouvelles fonctionnalités sont
                            ajoutées en continu.
                        </span>
                        <br />
                        <br />
                        <span>
                            Le code source du site est disponible sur{" "}
                            <Link
                                href="https://gitlab.com/incubateur-territoires/startups/dotations-locales/dotations-locales-app"
                                rel="noopener noreferrer"
                                target="_"
                            >
                                Gitlab
                            </Link>
                        </span>
                    </div>
                </SectionMentionsLegales>

                <SectionMentionsLegales title="Hébergement du site">
                    <div>
                        <span>
                            Scaleway, 8 rue de la ville l&apos;évêque, 75008
                            Paris
                        </span>
                    </div>
                </SectionMentionsLegales>

                <SectionMentionsLegales title="Améliorations et contact">
                    <div>
                        <span>
                            L&apos;équipe Dotations Locales reste à votre écoute
                            et entière disposition. Vous pouvez nous aider à
                            améliorer l&apos;accessibilité du site en nous
                            faisant vos remarques et observations :
                        </span>
                        <br />
                        <br />
                        <span>
                            <Link href="mailto:contact-dotations-locales@anct.gouv.fr">
                                Contactez-nous
                            </Link>
                        </span>
                        <br />
                        <br />
                        <span>
                            Vous pouvez également soumettre vos demandes de
                            modification sur la plate-forme{" "}
                            <Link
                                href="https://gitlab.com/incubateur-territoires/startups/dotations-locales/dotations-locales-app"
                                rel="noopener noreferrer"
                                target="_"
                            >
                                Gitlab
                            </Link>
                        </span>
                    </div>
                </SectionMentionsLegales>

                <SectionMentionsLegales title="Licence">
                    <div>
                        <span>
                            L&apos;Incubateur des Territoires a choisi de placer
                            par défaut ses documents sous Licence Ouverte / Open
                            Licence 2.0. Cela signifie que, sauf mention
                            contraire, vous êtes libres de réutiliser toute
                            information publique mise à disposition sur ce site,
                            gratuitement et sans restriction d&apos;usage, à la
                            seule condition de citer la source de
                            l&apos;information (Dotations Locales - Incubateur
                            des Territoires) et la date de dernière mise à jour
                            de l&apos;information réutilisée (par exemple avec
                            un lien hypertexte).
                        </span>
                    </div>
                </SectionMentionsLegales>

                <SectionMentionsLegales title="A quoi sert une licence ?">
                    <div>
                        <span>
                            La licence de réutilisation vous permet de connaître
                            avec précision les conditions dans lesquels vous
                            êtes autorisés à exploiter les informations mises à
                            disposition sur cette plateforme. Elle vient
                            encadrer juridiquement vos droits et obligations
                            lorsque vous réutilisez ces informations. La licence
                            de réutilisation est un contrat qui lie le ré
                            utilisateur à l&apos;Incubateur des Territoires ou
                            aux autres personnes ayant publié sur le site.
                        </span>
                        <br />
                        <br />
                        <span>
                            À cet égard, dès lors que vous téléchargez tout ou
                            partie des documents administratifs mis à
                            disposition sur ce site, vous vous engagez à
                            respecter les termes de la licence de réutilisation.
                            Par défaut, c&apos;est-à-dire sauf mention
                            contraire, les jeux de données peuvent être
                            exploités dans les conditions fixées par la{" "}
                            <Link
                                href="https://www.etalab.gouv.fr/licence-ouverte-open-licence"
                                target="_"
                            >
                                Licence Ouverte / Open Licence 2.0
                            </Link>
                            , que vous pouvez télécharger{" "}
                            <Link
                                href="https://www.etalab.gouv.fr/wp-content/uploads/2017/04/ETALAB-Licence-Ouverte-v2.0.pdf"
                                target="_"
                            >
                                ici
                            </Link>
                            .
                        </span>
                    </div>
                </SectionMentionsLegales>
            </div>
        </>
    );
}

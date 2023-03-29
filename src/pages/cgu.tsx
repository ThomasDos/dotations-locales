import SubHeaderCgu from "components/cgu/SubHeaderCgu";
import Link from "next/link";
import styled from "styled-components";

const StyledTextBloc = styled.div`
    margin: 12px 0;
`;

const Cgu = () => {
    return (
        <>
            <SubHeaderCgu />
            <main className="my-3 pt-3 pb-14 w-8/12 mx-auto flex flex-col">
                <StyledTextBloc>
                    Dotations Locales s&apos;engage à ce que la collecte et le
                    traitement de vos données, effectués à partir du portail{" "}
                    <Link href="/">dotations.incubateur.anct.gouv.fr</Link>,
                    soient conformes au règlement général sur la protection des
                    données (RGPD) et à la loi Informatique et Libertés.
                </StyledTextBloc>
                <StyledTextBloc>
                    En application de la loi Informatique et Libertés du 6
                    janvier 1978, vous disposez d&apos;un droit d&apos;accès, de
                    rectification, de modification et de suppression des données
                    qui vous concernent. Vous pouvez exercer ce droit de
                    plusieurs façons :
                </StyledTextBloc>
                <StyledTextBloc>
                    <ul className="flex flex-col">
                        <li>
                            par courriel à{" "}
                            <Link href="mailto:contact-dotations-locales@anct.gouv.fr">
                                contact-dotations-locales@anct.gouv.fr
                            </Link>
                        </li>
                    </ul>
                </StyledTextBloc>
                <StyledTextBloc>
                    En cas de non-conformité relative au traitement de vos
                    données, vous avez le droit d&apos;introduire une
                    réclamation auprès de l&apos;autorité de contrôle, la CNIL,
                    3, Place de Fontenoy TSA 80715 75334 PARIS Cedex 07.
                </StyledTextBloc>
                <StyledTextBloc>
                    Cookies de mesure d&apos;audience
                </StyledTextBloc>
                <StyledTextBloc>
                    Afin de mieux vous servir et d&apos;améliorer
                    l&apos;expérience utilisateur sur notre site, nous mesurons
                    son audience grâce à une solution utilisant la technologie
                    des cookies.Les données collectées permettent de fournir
                    uniquement des données statistiques anonymes de
                    fréquentation (le nombre de pages vues, le nombre de
                    visites, leur fréquence de retour,...)
                </StyledTextBloc>
                <StyledTextBloc>
                    {" "}
                    <Link href="/">dotations.incubateur.anct.gouv.fr</Link>{" "}
                    utilise l&apos;outil de mesure d&apos;audience Matomo.
                </StyledTextBloc>
                <StyledTextBloc>
                    Lors de votre première visite sur{" "}
                    <Link href="/">dotations.incubateur.anct.gouv.fr</Link>, un
                    bandeau vous informe de la présence de ces cookies et vous
                    invite à indiquer votre choix. Ils ne sont déposés que si
                    vous les acceptez. Vous pouvez à tout moment vous informer
                    et paramétrer vos cookies pour les accepter ou les refuser
                    en vous rendant sur la page Gestion des cookies (lien
                    présent en bas à gauche de chaque page du site). Vous
                    pourrez indiquer votre préférence soit globalement pour le
                    site, soit service par service.
                </StyledTextBloc>
                <StyledTextBloc>
                    Moyens d&apos;opposition au dépôt des cookies via votre
                    navigateur
                </StyledTextBloc>
                <StyledTextBloc>
                    Vous pouvez à tout moment choisir de désactiver
                    l&apos;ensemble des cookies, même ceux nécessaires au
                    fonctionnement du site. Cependant votre expérience
                    utilisateur risque d&apos;être dégradée. Si vous souhaitez
                    désactiver uniquement les cookies non indispensables au
                    fonctionnement du site, utiliser notre outil de gestion des
                    cookies.
                </StyledTextBloc>
                <StyledTextBloc>
                    Voici les procédures pour bloquer toute création de cookies
                    à partir des options de votre navigateur :
                </StyledTextBloc>
                <StyledTextBloc>
                    <ul className="flex flex-col">
                        <li>
                            <Link
                                href="https://support.mozilla.org/fr/kb/protection-renforcee-contre-pistage-firefox-ordinateur?redirectslug=activer-desactiver-cookies&redirectlocale=fr"
                                target="_"
                            >
                                Firefox
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://support.google.com/chrome/answer/95647?hl=fr"
                                target="_"
                            >
                                Chrome
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://support.microsoft.com/help/17442#ie=ie-9"
                                target="_"
                            >
                                Explorer
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
                                target="_"
                            >
                                Safari
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://help.opera.com/Windows/10.20/fr/cookies.html"
                                target="_"
                            >
                                Opera
                            </Link>
                        </li>
                    </ul>
                </StyledTextBloc>
                <StyledTextBloc>Journaux applicatifs</StyledTextBloc>

                <StyledTextBloc>
                    Les journaux applicatifs collectent l&apos;adresse IP lors
                    de la navigation sur le site{" "}
                    <Link href="/">dotations.incubateur.anct.gouv.fr</Link> et
                    l&apos;adresse email lors de l&apos;utilisation des
                    formulaires. Ces données sont collectées pour des besoins de
                    réponse à incident, notamment en cas d&apos;attaques ou de
                    tentatives d&apos;attaques informatiques. La durée de
                    conservation de ces journaux applicatifs est d&apos;un an.
                </StyledTextBloc>
            </main>
        </>
    );
};

export default Cgu;

import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledLink = styled.div`
    color: var(--grey-main-525);
    text-decoration: underline;
    :hover {
        color: var(--grey-425);
    }
`;

interface BreadCrumbsThreeLinksProps {
    firstLink: string;
    secondLink: string;
    hrefSecondLink: string;
    currentLink: string;
}

const BreadCrumbsThreeLinks = ({
    firstLink,
    secondLink,
    hrefSecondLink,
    currentLink,
}: BreadCrumbsThreeLinksProps) => {
    const router = useRouter();
    return (
        <nav className="flex align-items" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 p-0">
                <li className="inline-flex items-center mr-1">
                    <Link href="/">
                        <div className="flex items-center">
                            <StyledLink className="cursor-pointer text-xs inline-flex items-center font-medium">
                                {firstLink}
                            </StyledLink>
                        </div>
                    </Link>
                </li>
                <li className="inline-flex items-center mr-1">
                    <Link
                        href={{
                            pathname: hrefSecondLink,
                            query: { ...router.query },
                        }}
                    >
                        <div className="flex items-center">
                            <StyledLink className="cursor-pointer text-xs inline-flex items-center font-medium">
                                <svg
                                    className="w-4 h-4"
                                    fill="gray"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span className="ml-1 font-medium text-xs">
                                    {secondLink}
                                </span>
                            </StyledLink>
                        </div>
                    </Link>
                </li>

                <li aria-current="page">
                    <div className="flex items-center">
                        <svg
                            className="w-4 h-4"
                            fill="gray"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <span className="ml-1 font-medium text-xs">
                            {currentLink}
                        </span>
                    </div>
                </li>
            </ol>
        </nav>
    );
};

export default BreadCrumbsThreeLinks;

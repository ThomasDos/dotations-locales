import styled from "styled-components";

const StyledTitleBloc = styled.div`
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    margin-bottom: 16px;
`;

interface SectionMentionsLegalesProps {
    children: React.ReactNode;
    title: string;
}

export default function SectionMentionsLegales({
    children,
    title,
}: SectionMentionsLegalesProps) {
    return (
        <div className="my-6">
            <StyledTitleBloc>{title}</StyledTitleBloc>
            {children}
        </div>
    );
}

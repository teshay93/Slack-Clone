import React from 'react';
import styled from 'styled-components';
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const Sidebar = () => {
    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    CleverProgrammer
                </Name>
                <NewMessage>
                <AddCircleOutlineIcon />
                </NewMessage>
            </WorkspaceContainer>
        </Container>
    );
}

const Container = styled.div`
background: #3F0E40;
`;

const WorkspaceContainer = styled.div`
color: white;
height: 64px;
display: flex;
align-items: center;
padding-left: 19px;
`;

const Name = styled.div``;

const NewMessage = styled.div``;


export default Sidebar;

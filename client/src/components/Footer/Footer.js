import React from 'react';
import {
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	FooterRights,
	FooterWrapper,
	FooterColumn,
	FooterGrid,
	FooterContainer,
} from './FooterStyles';

import {Row, Section} from '../../styles/styles';

function Footer() {
	return (
		<FooterContainer>
			<Section padding="4rem 0 2rem 0">
				<FooterWrapper>
					<FooterGrid justify="space-between">
						<FooterColumn id="footerLogo">
							<Row align="center" margin="auto  0 0 0" gap="1rem"></Row>
						</FooterColumn>

						<FooterLinkItems>
							<FooterLink to="/">Home</FooterLink>
						</FooterLinkItems>

						<FooterLinkItems>
							<FooterLink to="/admin">Admin</FooterLink>
						</FooterLinkItems>

						<FooterLinkItems>
							<FooterLink to="/state">State</FooterLink>
						</FooterLinkItems>
					</FooterGrid>
					<FooterRights>
						Back Office &copy; {new Date().getFullYear()}
					</FooterRights>
				</FooterWrapper>
			</Section>
		</FooterContainer>
	);
}

export default Footer;

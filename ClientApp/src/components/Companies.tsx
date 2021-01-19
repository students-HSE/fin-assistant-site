import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Col, Container, ListGroup, ListGroupItem, Row} from "reactstrap";
// @ts-ignore
import TradingViewWidget from "react-tradingview-widget";
import * as CompaniesStore from "../store/Companies";
import {ApplicationState} from "../store";

type CompaniesProps =
    CompaniesStore.CompaniesState
    & typeof CompaniesStore.actionCreators;

interface CompaniesState {
    tradingViewSymbol: string;
}

class Companies extends PureComponent<CompaniesProps, CompaniesState> {
    public constructor(props: CompaniesProps) {
        super(props);
        
        this.state = { tradingViewSymbol: '' };
    }
    
    public componentDidMount() {
        this.props.requestCompanies();
    }

    public render() {
        const companiesList = (this.props.companies || []).map(company => {
            return (
                <ListGroupItem 
                    color={company.tradingViewSymbol === this.state.tradingViewSymbol ? 'primary' : ''} 
                    onClick={() => this.setState({ tradingViewSymbol: company.tradingViewSymbol })}
                >
                    {company.name}
                </ListGroupItem>
            )
        })
        
        return (
            <Container fluid={true}>
                <Row>
                    <Col>
                        <ListGroup>{companiesList}</ListGroup>
                    </Col>
                    <Col>
                        { this.state.tradingViewSymbol ? <TradingViewWidget locale={"ru"} symbol={this.state.tradingViewSymbol}/> : null }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(
    (initialState: ApplicationState) => initialState.companies,
    CompaniesStore.actionCreators
)(Companies as any);
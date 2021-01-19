import * as React from "react";
import {connect} from "react-redux";
import {Alert, Col, Container, Form, FormGroup, Input, Label, ListGroup, ListGroupItem, Row} from "reactstrap";
import {ApplicationState} from "../store";
import * as ProfileStore from "../store/Profile"

type ProfileProps = 
    ProfileStore.ProfileState
    & typeof ProfileStore.actionCreators;

class Profile extends React.PureComponent<ProfileProps> {
    public componentDidMount() {
        this.props.requestProfile();
    }

    public render() {
        return (
            <div>
                <Alert color={"warning"}>Тестовое уведомление</Alert>
                <Container fluid={true}>
                    <Row>
                        <Col>
                            <ListGroup>
                                <ListGroupItem>Основная информация</ListGroupItem>
                                <ListGroupItem>
                                    <Form>
                                        <FormGroup>
                                            <Label for={"email"}>Почта</Label>
                                            <Input id={"email"} type={"email"} placeholder={"test@test.ru"} value={this.props.email} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for={"firstName"}>Имя</Label>
                                            <Input id={"firstName"} type={"text"} placeholder={"Иван"} value={this.props.firstName} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for={"lastName"}>Фамилия</Label>
                                            <Input id={"lastName"} type={"text"} placeholder={"Иванов"} value={this.props.lastName} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for={"age"}>Возраст</Label>
                                            <Input id={"age"} type={"number"} placeholder={"18"} value={this.props.age} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for={"password"}>Пароль</Label>
                                            <Input id={"password"} type={"password"} placeholder={"Пароль"} value={this.props.password} />
                                        </FormGroup>
                                    </Form>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col>
                            <ListGroup>
                                <ListGroupItem color={"primary"}>Статистика</ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default connect(
    (initialState: ApplicationState) => initialState.profile,
    ProfileStore.actionCreators
)(Profile as any);
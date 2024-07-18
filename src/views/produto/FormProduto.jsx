import React from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

export default function FormCliente () {

    return (

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Titulo'
                                    width={10}
                                    placeholder='Informe o titulo do produto'
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Còdigo do Produto'
                                    width={5}
                                    placeholder='Informe o còdigo do produto'
                                />
                                    
                            </Form.Group>
                            
                            <Form.TextArea
                                label='Descrição'
                                placeholder='Informe a descrição do produto'
                                
                            />

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    required
                                    label='Valor Unitario'
                                    width={6}> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Minimo em Minutos'
                                    width={6}
                                    placeholder='30'
                                    >
                                    
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Maximo em Minutos'
                                    width={6}
                                    placeholder='40'
                                >
                                </Form.Input>

                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Voltar
                            </Button>
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}

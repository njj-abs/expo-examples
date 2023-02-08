import React from 'react';
import Input from './Input';

const Inputs = (context) => context.config.contactHeadings
	.map((data, key) => <Input key={ key } { ...{ ...context, data } }/>);

export default Inputs;

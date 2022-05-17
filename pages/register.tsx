import React from 'react';

type Props = {
	name: String;
};

const register: React.FunctionComponent<Props> = ({ name }) => {
	return <div>{name}</div>;
};

export default register;

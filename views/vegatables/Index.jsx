const React = require('react');

class Index extends React.Component {
    render() {
        const { vegatables } = this.props;
        return (
            <div>
                <div>
                    <h1>Vegatables Index Page</h1>
                    <ul>
                        {vegatables.map((vegatables, i) => {
                            return (
                                <li>
                                    The{' '}
                                    <a href={`/vegatables/${i}`}>
                                    {vegatable.name}
                                    </a>{' '}
                                    is {vegatable.color} <br></br>
                                    {vegatable.readyToEat
                                        ? `It is ready to eat`
                                        : `It is not ready to eat`}
                                    <br />
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div>
                    <nav>
                        <a href="/fruits/new">Create a New Vegatable</a>
                    </nav>
                </div>
            </div>
        );
    }
}

module.exports = Index;
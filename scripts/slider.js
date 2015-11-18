// tutorial1.js

var SliderList = React.createClass({
    render: function() {
        var sliderNodes = this.props.data.map(function(slider) {
            return (
                <li key={slider.id}>
                    <img src={slider.image} alt={slider.title} />
                    <div className="tint">
                        <div className="content text-center">
                            <h1>{slider.title}</h1>
                            <h5>{slider.subtitle}</h5>
                            <p><a href={slider.link} className="btn btn-primary">查看内容</a></p>
                        </div>
                    </div>
                </li>
            );
        });
        return (
            <ul className="slides-container">
                {sliderNodes}
            </ul>
        );
    }
});

var SliderBox = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    render: function() {
        return (
            <SliderList data={this.state.data} />
        );
    }
});
ReactDOM.render(
    <SliderBox url="scripts/slider.json" />,
    document.getElementById('slider')
);
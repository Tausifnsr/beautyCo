import { Component } from "react"
import './Welcome.css';



class Welcome extends Component {
    render() {
        return(
            <div className="welcomeSection">
                <div className="leftSection">
            <h4 className="heading">Welcome To BeautyCo</h4>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>LoremAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>

            <a href="/aboutus"><button className="btn3" type="button">Learn More</button></a>

            </div>
            <div className="rightSection">
                <img src="../images/welcome.png" alt="welcomeImage"/>
            </div>
            </div>
        )
    }
}

export default Welcome
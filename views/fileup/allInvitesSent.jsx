var React = require("react");

class AllInvitesSent extends React.Component {
  render() {

    let Navbar = require('./navbar.jsx');

    let users;

    if (this.props.results){
        users = this.props.results.map(x=>{
            let id = x.user_id;
            let name = x.name;
            let email = x.email;
            let company_name;
            if (x.company_name){
                company_name = x.company_name
            } else {
                company_name = "Nil"
            }
            let image = x.image

            return   <div class="card text-white bg-dark mr-3 mt-5">
                      <img class="card-img-top" src={image} alt="Card image cap"/>
                      <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Email: {email}</h6>
                        <p class="card-text">Company Name: {company_name}</p>
                      </div>
                    </div>


        });
    } else {
        users = <p className="lead text-center mt-5">You have not sent any invites yet</p>
    }



    return (
      <html>
        <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
            <link rel="stylesheet" type="text/css" href="/style.css"/>
        </head>
        <body>

            <Navbar/>

            <h3 className="text-center mt-5">Invites Sent:</h3>
                <div className=" row justify-content-center mb-5">
                    {users}
                </div>

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>

      </html>
    );
  }
}

module.exports = AllInvitesSent;
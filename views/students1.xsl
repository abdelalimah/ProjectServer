<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>

                    <head>
          <meta charset="utf-8"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        
          <title>Page d'Acceuil</title>
        
          <!-- Google font -->
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700%7CVarela+Round" rel="stylesheet"/>
        
          <!-- Bootstrap -->
          <link type="text/css" rel="stylesheet" href="css/bootstrap.min.css" />
        
          <!-- Owl Carousel -->
          <link type="text/css" rel="stylesheet" href="css/owl.carousel.css" />
          <link type="text/css" rel="stylesheet" href="css/owl.theme.default.css" />
        
          <!-- Magnific Popup -->
          <link type="text/css" rel="stylesheet" href="css/magnific-popup.css" />
        
          <!-- Font Awesome Icon -->
          <link rel="stylesheet" href="css/font-awesome.min.css"/>
        
          <!-- Custom stlylesheet -->
          <link type="text/css" rel="stylesheet" href="css/style.css" />
        
        
        </head>


        <script>
              function deleteStudent(cne){
                  fetch(`http://localhost:3000/students/${cne}`,{
                      method: 'DELETE'
                  }).then(() => location.reload());
              }
          </script>
        <body>


<form class="navbar-form navbar-left" action="index.php" method="POST">
                <div class="form-group">
                  <input type="text" name="recherche" class="form-control" style="color: black;background-color:#EFEFEF; border: 1px #DC4C46 solid;" placeholder="Rechercher un étudiant"/>
                </div>
                <button type="submit"  style="color:#EFEFEF;background-color:#DC4C46; border:none;" class="btn btn-default">Rechercher</button>
             
        <!-- Button trigger modal -->
        <div class="card-header">
                
                
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Ajouter
        </button>
</div>

              <div class="card mb-3">
            <div class="card-header">
                <i class="fas fa-table"></i>
                Liste des étudiants</div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                              <th>CNE</th>
                              <th>CIN</th>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Age</th>
                                
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>CNE</th>
                              <th>CIN</th>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Age</th>
                                
                                <th>Action</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            <xsl:for-each select="/students/student">
                                <tr>
                                    <td>
                                        <xsl:value-of select="@cne"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="@cin"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="name"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="nickname"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="age"/>
                                    </td>
                                    <td>

                                        <a class="btn btn-secondary" onclick="deleteStudent('{@cne}')" >Supprimer</a>    
                                        
                                    </td>
                                </tr>
                            </xsl:for-each>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </form>
        </body>
        </html>
    </xsl:template>
</xsl:stylesheet> 
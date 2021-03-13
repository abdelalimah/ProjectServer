<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>
    <xsl:template match="/">
        <!-- DataTables Example -->
        <div class="card mb-3">
            <div class="card-header">
                <i class="fas fa-table"></i>
                Liste des matériaux</div>
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
                                <th>Photo</th>
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
                                <th>Photo</th>
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
                                        <xsl:value-of select="/images/{image/@src}"/>
                                    </td>
                                    <td>
                                        <a class="btn btn-secondary" ><xsl:attribute name="href">edit.php?id=<xsl:value-of select="@id"/> </xsl:attribute> Modifier</a>
                                        
                                        <a class="btn btn-danger" onclick="return confirm('Voulez vous supprimer ce matériel?')"><xsl:attribute name="href"> index.php?delete=<xsl:value-of select="@id"/> </xsl:attribute>Supprimer</a>
                                    </td>
                                </tr>
                            </xsl:for-each>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet>










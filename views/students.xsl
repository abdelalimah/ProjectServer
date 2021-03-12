<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <script>

                function deleteStudent(cne){
                    fetch(`http://localhost:3000/students/${cne}`,{
                        method: 'DELETE'
                    }).then(() => location.reload());
                }
                
            </script>
        <body>
            <xsl:for-each select="/students/student">
            <ul>
                <li>
                    <xsl:value-of select="@cne"></xsl:value-of>
                </li>
                <li>
                    <xsl:value-of select="@cin"></xsl:value-of>
                </li>
                <li>
                    <xsl:value-of select="name"></xsl:value-of>
                    <button onclick="deleteStudent('{@cne}')">Delete</button>
                </li>
                <li>
                    <xsl:value-of select="nickname"></xsl:value-of>
                </li>
                <li>
                    <xsl:value-of select="age"></xsl:value-of>
                </li>
            </ul>
        </xsl:for-each>
        </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
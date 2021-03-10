<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
 <xsl:template match="/">
        <html>
            <link rel="stylesheet" href="./style.css"/>
            <body>
                <h1 align="center">
                    Liste des Livres dans le thème est XML
                </h1>
                <hr />
                <div class="frame">

                    <xsl:for-each select="liste/livre[theme='XML']">
                    <div class="inner-frame">
                        <p>
                            <b>Code</b>
                            :
                            <xsl:value-of select="@code"></xsl:value-of>
                        </p>
                        <p>
                            <b>Titre</b>
                            :
                            <xsl:value-of select="titre"></xsl:value-of>
                        </p>
                        <p>
                            <b>Auteurs</b>
                            :
                            <xsl:for-each select="auteurs/auteur">
                                    <xsl:value-of select="."></xsl:value-of>
                                    <xsl:if test="position() != last()">
                                        ,
                                    </xsl:if>
                                
                            </xsl:for-each>
                        </p>
                        <p>
                            <b>Editeur</b>
                            :
                            <xsl:value-of select="editeur"></xsl:value-of>
                        </p>
                        <p>
                            <b>Date-Edition</b>
                            :
                            <xsl:value-of select="date-edition"></xsl:value-of>
                        </p>
                        <p>
                            <b>Thème</b>
                            :
                            <xsl:value-of select="theme"></xsl:value-of>
                        </p>
                    </div>
                            <img src="{image/@source}" class="image" alt="xml"></img>
                            <div class="resume-frame">
                                <xsl:for-each select="resumes/resume">
                                <p>
                                    <xsl:value-of select=".">
                                        
                                    </xsl:value-of>
                                </p>
                            </xsl:for-each>
                            </div>
                    </xsl:for-each>
                </div>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
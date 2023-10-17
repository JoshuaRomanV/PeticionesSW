# FILEPATH: <filepath>

def create_gitlab_bug_report(title, description, labels):
"""
Crea un template para el bug provisto por el titulo, descripcion y etiquetas

    Args:
    - title (str): El titulo del bug.
    - description (str): De que trata el bug, notas describiendo el error
    - labels (list of str): The labels to apply to the bug report.

    Returns:
    - str: El template de gitlab.
    """
    template = f"""## Resumen del Bug

    {title}

    ## Descripcion del bug

    {description}

    ## Etiquetas

    {', '.join(labels)}
    """
    return template

Pasos para reproducir
(Cómo se puede reproducir el problema, esto es muy importante)

¿Cuál es el comportamiento actual del error?
(Lo que realmente sucede)

¿Cuál es el comportamiento esperado correcto?
(Lo que debería ver en su lugar)

Registros y/o capturas de pantalla relevantes
(Adjunte imagenes aqui)

Frequencia
(Veces que ocurre el bug)

Datos del sistema
(Sistema operativo, navegador, version del navegador, version de la aplicacion)

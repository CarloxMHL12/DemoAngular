using System;
using System.Collections.Generic;

namespace DL;

public partial class Usuario
{
    public int IdUsuario { get; set; }

    public string Nombre { get; set; } = null!;

    public string ApellidoPaterno { get; set; } = null!;

    public string? ApellidoMaterno { get; set; }

    public int Edad { get; set; }

    public string? Username { get; set; }

    public string? Password { get; set; }

    public string? Telefono { get; set; }
}

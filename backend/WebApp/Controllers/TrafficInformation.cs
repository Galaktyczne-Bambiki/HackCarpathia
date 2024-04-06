using System.Collections.ObjectModel;
using GeoJSON.Text.Feature;
using GeoJSON.Text.Geometry;
using Microsoft.AspNetCore.Mvc;

namespace WebApp.Controllers;

[ApiController]
[Route("api/[controller]")]
[Produces("application/json")]
public class TrafficInformation : ControllerBase
{
    [HttpGet("conditions")]
    public async Task<IActionResult> GetConditions(CancellationToken cancellationToken)
    {
        var data = new FeatureCollection();
        data.Features.Add(new Feature()
        {
            Geometry = new LineString()
            {
                Coordinates = ReadOnlyCollection<IPosition>.Empty
            }
        });

        return Ok(data);
    }

}
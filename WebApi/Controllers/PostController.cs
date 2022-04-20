using Microsoft.AspNetCore.Mvc;
using Portfolio.Models;

namespace Portfolio.Controllers;
[ApiController]
[Route("[controller]")]
public class PostController : ControllerBase
{
    private readonly ILogger<PostController> _logger;

    public PostController(ILogger<PostController> logger)
    {
        _logger = logger;
    }
    [HttpGet]
    public IEnumerable<Post> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new Post
        {
            Id = index,
            Title = $"Title of Post number {index}",
            Content = $"Real Content of the post number {index}",
            Author = "Admin"
        });
    }
}
namespace Portfolio.Models;
public class Post
{
    public int Id { get; set; }
    public string Title { get; set; } = "";
    public string Content { get; set; } = "";
    public string Author { get; set; } = "";
    public DateTime CreatedDate { get; set; } = DateTime.Now;
}
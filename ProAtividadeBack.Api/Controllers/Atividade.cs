using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ProAtividadeBack.Api.Models;

namespace ProAtividadeBack.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Atividade> Get()
        {
            return new List<Atividade>()
            {
                new Atividade(1),
                new Atividade(2),
                new Atividade(3)
            };
        }
        
        [HttpGet("{id}")]
        public Atividade Get(int id)
        {
            return new Atividade(id);
        }
        
        [HttpPost]
        public Atividade Post(Atividade atividade)
        {
            atividade.Id += 10;
            return atividade;
        }
        
        [HttpPut("{id}")]
        public string Put(int id, Atividade atividade)
        {
            return "Atualizar dados";
        }
        
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return "Excluir dados";
        }
    }
}
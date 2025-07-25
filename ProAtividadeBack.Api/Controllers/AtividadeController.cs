using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProAtividadeBack.Api.Data;
using ProAtividadeBack.Api.Models;
using SQLitePCL;

namespace ProAtividadeBack.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {
        private readonly DataContext _context;
        public AtividadeController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Atividade> Get()
        {
            return _context.Atividades;
        }
        
        [HttpGet("{id}")]
        public Atividade Get(int id)
        {
            return _context.Atividades.FirstOrDefault(a => a.Id == id);
        }

        [HttpPost]
        public IActionResult Post(Atividade atividade)
        {
            if (atividade == null)
                return BadRequest("Produto inválido");

            _context.Atividades.Add(atividade);
            if (_context.SaveChanges() > 0)
                return CreatedAtAction(nameof(Get), new { Id = atividade.Id }, atividade);
            return StatusCode(500, "Erro ao salvar a atividade");
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Atividade atividade)
        {
            if (id != atividade.Id)
                return BadRequest("Você está tentando atualizar a atividade errada");

            _context.Atividades.Update(atividade);
            if (_context.SaveChanges() > 0)
                return NoContent();

            return StatusCode(500, "Erro ao atualizar a atividade");
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var atividade = _context.Atividades.Find(id);

            if (atividade == null)
                return NotFound("Atividade não encontrada");

            _context.Remove(atividade);

            if (_context.SaveChanges() > 0)
                return NoContent();

            return StatusCode(500, "Erro ao atualizar a atividade");
        }
    }
}
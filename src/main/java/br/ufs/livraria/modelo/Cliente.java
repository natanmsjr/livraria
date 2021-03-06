package br.ufs.livraria.modelo;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

@Entity
@DiscriminatorValue("2")
public class Cliente extends Usuario implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name="data_cadastro")
	@Temporal(TemporalType.DATE)
	private Date dataCadastro;
	
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	@JoinColumn(name = "cliente_id")
	private List<Venda> vendas;
	
	public Cliente() {
	}

	public Date getDataCadastro() {
		return dataCadastro;
	}

	public void setDataCadastro(Date dataCadastro) {
		this.dataCadastro = dataCadastro;
	}

}
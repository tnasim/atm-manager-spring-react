package com.cfm.atm.model;
import java.sql.Date;
import java.util.Random;

import javax.persistence.*;

@Entity
@Table(name = "accounts")
public class Account {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name = "number")
	private String number;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "address")
	private String address;
	
	@Column(name = "balance")
	private Double balance;
	
	@Column(name = "opening_date")
	private Date openingDate;
	
	@Column(name = "active")
	private boolean active;
	
	public Account() {
	}
	
	public Account(String name, String address, Double balance) {
		this.name = name;
		Random rnd = new Random();
		this.number = String.valueOf(10000000 + rnd.nextInt(90000000)); 
		this.address = address;
		this.balance = balance;
		this.openingDate = new Date(System.currentTimeMillis());
		this.active = false;
	}
	
	public long getId() {
		return id;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Double getBalance() {
		return balance;
	}

	public void setBalance(Double balance) {
		this.balance = balance;
	}

	public Date getOpeningDate() {
		return openingDate;
	}

	public void setOpeningDate(Date openingDate) {
		this.openingDate = openingDate;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}
	
	@Override
	public String toString() {
		return "Account [id=" + id + ", number=" + number + ", name=" + name + ", active=" + active + "]";
	}
	
}

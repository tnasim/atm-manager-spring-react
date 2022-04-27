package com.cfm.atm.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import com.cfm.atm.model.Account;
public interface AccountRepository extends JpaRepository<Account, Long> {
  List<Account> findByActive(boolean active);
  List<Account> findByNameContaining(String name);
}

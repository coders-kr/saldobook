package kr.saldo.web;

import jakarta.servlet.http.HttpSession;
import kr.saldo.repo.AppUserRepository;
import kr.saldo.service.CurrentUserService;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/account")
public class AccountController {
  private final AppUserRepository users;
  private final CurrentUserService currentUser;

  public AccountController(AppUserRepository users, CurrentUserService currentUser) {
    this.users = users;
    this.currentUser = currentUser;
  }

  @DeleteMapping
  @Transactional
  public void delete(HttpSession session) {
    var user = currentUser.require(session);
    if (!users.existsById(user.getId())) {
      throw new ResponseStatusException(HttpStatus.NOT_FOUND, "회원을 찾을 수 없습니다.");
    }
    users.deleteById(user.getId());
    session.invalidate();
  }
}

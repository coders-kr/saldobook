package kr.saldo.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "recurring_charges")
public class RecurringCharge {
  @Id private UUID id;
  @Column(name = "user_id", nullable = false) private UUID userId;
  @Column(nullable = false, length = 120) private String name;
  @Column(nullable = false, length = 40) private String category;
  @Column(nullable = false) private long amount;
  @Column(name = "day_of_month", nullable = false) private int dayOfMonth;
  @Column(nullable = false) private boolean active;
  @Column(name = "last_paid_at") private Instant lastPaidAt;
  @Column(name = "created_at", nullable = false) private Instant createdAt;

  protected RecurringCharge() {}

  public RecurringCharge(UUID userId, String name, String category, long amount, int dayOfMonth) {
    this.id = UUID.randomUUID();
    this.userId = userId;
    this.name = name;
    this.category = category;
    this.amount = amount;
    this.dayOfMonth = dayOfMonth;
    this.active = true;
    this.createdAt = Instant.now();
  }

  public void deactivate() {
    this.active = false;
  }

  public void update(String name, String category, long amount, int dayOfMonth) {
    this.name = name;
    this.category = category;
    this.amount = amount;
    this.dayOfMonth = dayOfMonth;
  }

  public void markPaid(Instant paidAt) {
    this.lastPaidAt = paidAt;
  }

  public void markUnpaid() {
    this.lastPaidAt = null;
  }

  public UUID getId() { return id; }
  public UUID getUserId() { return userId; }
  public String getName() { return name; }
  public String getCategory() { return category; }
  public long getAmount() { return amount; }
  public int getDayOfMonth() { return dayOfMonth; }
  public boolean isActive() { return active; }
  public Instant getLastPaidAt() { return lastPaidAt; }
  public Instant getCreatedAt() { return createdAt; }
}
